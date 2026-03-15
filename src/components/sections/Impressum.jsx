export default function Impressum() {
  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center gap-6 text-center px-4 py-24">
      <h1 className="text-xl sm:text-2xl text-gray-800 font-bold">Impressum</h1>

      <div className="text-gray-700 text-left space-y-6">
        <section>
          <h2 className="font-semibold text-sm mb-2">Angaben gemäß § 5 DDG</h2>
          <p>
            <span
              style={{
                unicodeBidi: "bidi-override",
                direction: "rtl",
                textAlign: "left",
              }}
            >
              muabllaW neiviV
            </span>
            <br />
            <span
              style={{
                unicodeBidi: "bidi-override",
                direction: "rtl",
                textAlign: "left",
              }}
            >
              82 ediewfoH
            </span>
            <br />
            21031 Hamburg
            <br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-sm mb-2">Kontakt</h2>
          <p>
            E-Mail:{" "}
            <span
              style={{
                unicodeBidi: "bidi-override",
                direction: "rtl",
                textAlign: "left",
              }}
            >
              moc.liamg@muabw.neiviv
            </span>
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-sm mb-2">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>
          <p>
            <span
              style={{
                unicodeBidi: "bidi-override",
                direction: "rtl",
                textAlign: "left",
              }}
            >
              muabllaW neiviV
            </span>
            <br />
            Adresse wie oben
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-sm mb-2">Haftung für Inhalte</h2>
          <p>
            Die Inhalte meiner Seiten wurden mit größter Sorgfalt erstellt. Für
            die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich
            jedoch keine Gewähr übernehmen.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-sm mb-2">Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-sm mb-2">Haftung für Links</h2>
          <p>
            Die Website enthält Links zu externen Websites Dritter, auf deren
            Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden
            Inhalte auch keine Gewähr übernehmen.
          </p>
        </section>
      </div>
    </div>
  );
}
