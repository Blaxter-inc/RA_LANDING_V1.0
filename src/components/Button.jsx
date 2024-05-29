const Button = ({ styles }) => {
  const buttonStyles = `py-4 px-6 bg-red-gradient font-poppins font-medium text-[18px] text-white outline-none rounded-full ${styles} rounded-[10px]`;

  return (
    <button type="button" className={buttonStyles}>
      Get Started
    </button>
  );
};

export default Button;
