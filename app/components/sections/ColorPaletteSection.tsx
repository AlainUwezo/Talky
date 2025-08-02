export default function ColorPaletteSection() {
  // const colors = [
  //   { hex: "#00FFFF", label: "Vivid cyan" },
  //   { hex: "#C2F732", label: "Vert chartreuse" },
  //   { hex: "#FFFF00", label: "Yellow/Jaune" },
  //   { hex: "#00004D", label: "Navy bleu" },
  //   { hex: "#000000", label: "Black\n(by default)" },
  //   { hex: "#FFFFFF", label: "White" },
  //   { hex: "#FF5400", label: "Vivid orange" },
  //   { hex: "#FF9E00", label: "Orange" },
  //   { hex: "#3D003A", label: "Russian violet" },
  //   { hex: "#E0B6E4", label: "Light lavender" },
  // ];

  const cellStyle =
    "flex flex-col justify-center items-center text-center px-2 py-4 text-sm font-medium";

  return (
    <section className="w-full max-w-5xl mx-auto my-12 border border-black">
      <div className="grid grid-cols-5 grid-rows-3 gap-0">
        {/* Première ligne */}
        <div className={`${cellStyle}`} style={{ backgroundColor: "#00FFFF" }}>
          <p className="text-black">#00FFFF</p>
          <p className="text-black">Vivid cyan</p>
        </div>
        <div className={`${cellStyle}`} style={{ backgroundColor: "#C2F732" }}>
          <p className="text-black">#C2F732</p>
          <p className="text-black">Vert chartreuse</p>
        </div>
        <div className={`${cellStyle}`} style={{ backgroundColor: "#FFFF00" }}>
          <p className="text-black">#FFFF00</p>
          <p className="text-black">Yellow/Jaune</p>
        </div>
        <div className={`${cellStyle}`} style={{ backgroundColor: "#FF5400" }}>
          <p className="text-white">#FF5400</p>
          <p className="text-white">Vivid orange</p>
        </div>
        <div className={`${cellStyle}`} style={{ backgroundColor: "#3D003A" }}>
          <p className="text-white">#3D003A</p>
          <p className="text-white">Russian violet</p>
        </div>

        {/* Deuxième ligne */}
        <div className={`${cellStyle}`} style={{ backgroundColor: "#00004D" }}>
          <p className="text-white">#00004D</p>
          <p className="text-white">Navy bleu</p>
        </div>
        <div className={`${cellStyle}`} style={{ backgroundColor: "#000000" }}>
          <p className="text-white">#000000</p>
          <p className="text-white whitespace-pre-line">Black\n(by default)</p>
        </div>
        <div className={`${cellStyle}`} style={{ backgroundColor: "#FFFFFF" }}>
          <p className="text-black">#FFFFFF</p>
          <p className="text-black">White</p>
        </div>
        <div className={`${cellStyle}`} style={{ backgroundColor: "#FF9E00" }}>
          <p className="text-black">#FF9E00</p>
          <p className="text-black">Orange</p>
        </div>
        <div className={`${cellStyle}`} style={{ backgroundColor: "#E0B6E4" }}>
          <p className="text-black">#E0B6E4</p>
          <p className="text-black">Light lavender</p>
        </div>
      </div>

      {/* Note en bas */}
      <div className="bg-black text-white text-center text-sm py-2">
        (Noir et Blanc : couleur neutre)
      </div>
    </section>
  );
}
