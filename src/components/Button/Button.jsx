import React, { useEffect, useMemo } from "react";

function Button(props) {
  const {
    children,
    size = "",
    block = false,
    outlined = false,
    danger = false,
    secondary = false,
  } = props;

  const buttonClasses = useMemo(() => {
    let defaultClasses =
      "rounded-xl font-custom flex flex-row items-center justify-center";

    if (block) {
      defaultClasses += " block w-full bg-[#FFD93D] text-white";
    }

    if (size === "sm") {
      defaultClasses += " text-sm h-8 px-2  text-white";
    } else {
      defaultClasses += " h-12 px-4 ";
    }

    if (outlined) {
      if (danger) {
        defaultClasses += " border-red-500 border text-[#db1b1b]";
      }
      if (secondary) {
        defaultClasses += "border-[#242424] border-2  w-full text-[#131212] hover:border-[#FFD93D] hover:text-[#FFD93D] duration-300 "
      }
    }

    return defaultClasses;
  }, [block, danger, outlined, size, secondary]);

  return (
    <button
      type="button"
      className={buttonClasses}
      {...props}
      block={block.toString()}
      outlined={outlined.toString()}
      danger={danger.toString()}
      secondary={secondary.toString()}
    >
      {children}
    </button>
  );
}

export default Button;
