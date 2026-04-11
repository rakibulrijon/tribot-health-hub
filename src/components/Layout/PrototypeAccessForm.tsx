import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import AnimatedCheckmark from "@/components/ui/animated-checkmark";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  organization: z.string().min(2, "Organization is required"),
  role: z.string().min(2, "Role is required"),
  useCase: z.string().min(10, "Please describe your intended use case (minimum 10 characters)"),
});

const PrototypeAccessForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      role: "",
      useCase: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      // Use mailto approach - opens user's email client
      const subject = "TRIBOT Prototype Access Request";
      const body = `Hello Abdullah,

I would like to request access to the TRIBOT prototype.

Name: ${values.name}
Email: ${values.email}
Organization: ${values.organization}
Role: ${values.role}

Intended Use Case:
${values.useCase}

Submitted: ${new Date().toLocaleString()}

Thank you for considering my request.

Best regards,
${values.name}`;

      const mailtoUrl = `mailto:r.rejon@unsw.edu.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
      
      // Show animated checkmark
      setShowSuccess(true);
      
      // Reset form and close dialog
      form.reset();
      setIsOpen(false);
    } catch (error) {
      console.error('Form submission failed:', error);
      toast({
        title: "Failed to send request",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Animated Checkmark */}
      <AnimatedCheckmark 
        isVisible={showSuccess} 
        onComplete={() => setShowSuccess(false)} 
      />
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="hero" size="lg" className="text-lg px-8 py-6">
          Try TRIBOT Prototype
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Request TRIBOT Prototype Access</DialogTitle>
          <DialogDescription>
            Please fill out the form below to request access to the TRIBOT prototype. We'll review your request and get back to you soon.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email address" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="organization"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organization</FormLabel>
                  <FormControl>
                    <Input placeholder="Hospital, Research Institution, etc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role/Position</FormLabel>
                  <FormControl>
                    <Input placeholder="Doctor, Researcher, Administrator, etc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="useCase"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Intended Use Case</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Describe how you plan to use TRIBOT prototype..." 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end space-x-2 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button type="submit" variant="hero" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Request Access'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
    </>
  );
};

export default PrototypeAccessForm;