function Button({ children, variant = "primary" }) {
  const styles = {
    primary:
      "bg-black text-white hover:opacity-90",

    secondary:
      "border border-gray-300 bg-white hover:bg-gray-50",
  };

  return (
    <button
      className={`
        px-6
        py-3
        rounded-full
        transition-all
        duration-300
        ${styles[variant]}
      `}
    >
      {children}
    </button>
  );
}

export default Button;