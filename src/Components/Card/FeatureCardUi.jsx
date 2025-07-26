import * as React from "react";

// Utility to safely merge class names
function mergeClassNames(defaultClasses, className) {
  return className ? `${defaultClasses} ${className}` : defaultClasses;
}

// Card
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={mergeClassNames(
      "rounded-2xl border bg-white text-black shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

// CardHeader
const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={mergeClassNames("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

// CardTitle
const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={mergeClassNames(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

// CardDescription
const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={mergeClassNames("text-sm text-gray-600 text-center", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

// CardContent
const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={mergeClassNames("p-6 pt-0", className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

// CardFooter
const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={mergeClassNames("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

// Export for use in your components
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
