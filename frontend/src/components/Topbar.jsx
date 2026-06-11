function Topbar() {
  return (
    <header
      className="
        h-20
        border-b
        border-gray-200
        flex
        items-center
        justify-between
        px-8
        bg-white
      "
    >
      <h2
        className="text-2xl font-semibold"
        style={{ fontFamily: "Outfit" }}
      >
        Dashboard
      </h2>

      <div
        className="
          w-10
          h-10
          rounded-full
          bg-[#C7B8EA]
        "
      />
    </header>
  );
}

export default Topbar;