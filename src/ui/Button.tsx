import React from "react";

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "tertiary"; // agregamos tertiary
  size?: "small" | "medium" | "large";
  navbar?: boolean;    // Nueva prop para activar estilo Navbar
  onClick?: () => void;
}

const variantClasses = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",
  secondary: "bg-gray-300 hover:bg-gray-400 text-gray-800 focus:ring-gray-400",
  tertiary: "bg-blue-200 hover:bg-blue-300 text-black focus:ring-blue-300", // azul con texto negro
};

const sizeClasses = {
  small: "text-sm px-3 py-1.5",
  medium: "text-base px-5 py-2.5",
  large: "text-lg px-6 py-3",
};

const navbarClasses = `
  rounded-md
  border border-transparent
  px-4 py-2
  text-base font-medium font-sans
  bg-[#1a1a1a]
  cursor-pointer
  transition-colors duration-250
  hover:border-[#646cff]
  focus:outline-none focus-visible:outline-4 focus-visible:outline-auto focus-visible:outline-webkit-focus-ring-color
  text-white
`;

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  size = "medium",
  navbar = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={
        navbar
          ? navbarClasses
          : `rounded-md font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2
             ${variantClasses[variant]} ${sizeClasses[size]} border border-black`
      }
    >
      {label}
    </button>
  );
};

export default Button;
