const Loader = () => {
  return (
    // <div class="flex items-center justify-center">
    //   <div
    //     class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] text-cyan-500"
    //     role="status"
    //   >
    //     <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
    //       Loading...
    //     </span>
    //   </div>
    // </div>

    <div className="flex justify-center items-center ">
      <div className="relative w-16 h-16">
        <div
          className="absolute animate-ping rounded-full bg-cyan-500 h-4 w-4"
          style={{ left: 0 }}
        />
        <div
          className="absolute animate-ping rounded-full bg-lime-500 h-4 w-4"
          style={{ left: "33%", transform: "translateX(-33%)" }}
        />
        <div
          className="absolute animate-ping rounded-full bg-purple-500 h-4 w-4"
          style={{ left: "66%", transform: "translateX(-66%)" }}
        />
      </div>
    </div>
  );
};

export default Loader;
