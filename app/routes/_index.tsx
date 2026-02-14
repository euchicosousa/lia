import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Dra. Ana Lia Rocha — Pediatra e Neonatologista em Sobral.",
    },
    {
      name: "description",
      content:
        "Agende suas consultas pediátricas com a Dra. Ana Lia Rocha em Sobral.",
    },
  ];
};

export default function Index() {
  return (
    <div
      className="min-h-dvh bg-amber-100 grid items-end relative sm:w-[600px] mx-auto"
      style={{
        backgroundImage: "url('./bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div className="text-center absolute w-full top-0 text-[10px] py-4 font-bold tracking-wider">
        MÉDICA PEDIÁTRICA E NEONATOLOGISTA EM SOBRAL
      </div>
      <div className="w-full grid items-end bg-gradient-to-t from-[#fff]">
        <div className="pb-8 text-center">
          <div className="flex my-12 flex-col gap-2 px-16">
            <a
              target="_blank"
              rel="noreferrer"
              href={encodeURI(
                "https://wa.me/+55088999990479?text=Olá, gostaria de marcar uma consulta com a Dra. Ana Lia.",
              )}
              className="link bg-lia-blue text-white"
            >
              Consulta na Clínica Vivat
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={encodeURI(
                "https://wa.me/+5588997322055?text=Olá, gostaria de marcar uma consulta com a Dra. Ana Lia.",
              )}
              className="link bg-lia-tomato text-white"
            >
              Consulta na CrescEndo
            </a>
          </div>

          <img src="./logo.svg" alt="" className="w-40 mx-auto mb-4" />

          {/* <div className="text-xs">
            Siga o meu{" "}
            <a
              href="https://instagram.com/dramargaridacarneiro"
              target="_blank"
              rel="noreferrer"
              className="text-[#444] font-bold  underline"
            >
              Instagram
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}
