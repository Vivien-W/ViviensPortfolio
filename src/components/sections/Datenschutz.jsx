export default function Datenschutz() {
  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center gap-6 text-center px-4 py-24">
      <h1 className="text-xl sm:text-3xl text-gray-800 font-bold">
        Datenschutzerklärung
      </h1>

      <div className="text-gray-700 text-left space-y-6">
        <section>
          <h2 className="font-semibold mb-2">1. Verantwortlicher</h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p className="mt-2">
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
          <h2 className="font-semibold mb-2">2. Hosting und Server-Logfiles</h2>
          <p>
            Diese Website wird über GitHub Pages gehostet. Anbieter ist die{" "}
            <strong>GitHub Inc.</strong>, 88 Colin P. Kelly Jr. Street, San
            Francisco, CA 94107, USA.
          </p>

          <p className="mt-4">
            Beim Aufruf dieser Website erfasst GitHub automatisch Informationen
            in sogenannten Server-Logfiles:
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>IP-Adresse</li>
            <li>Datum und Uhrzeit der Anfrage</li>
            <li>Browsertyp und -version</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Referrer URL (die zuvor besuchte Seite)</li>
          </ul>

          <p className="mt-4">
            <strong>Rechtsgrundlage:</strong> Die Verarbeitung erfolgt auf Basis
            von Art. 6 Abs. 1 lit. f DSGVO. Mein berechtigtes Interesse liegt in
            der technischen Bereitstellung, der Sicherheit und der Optimierung
            der Website.
          </p>
          <p className="mt-2">
            <strong>Datenübertragung:</strong> GitHub Inc. ist unter dem EU-U.S.
            Data Privacy Framework zertifiziert, was ein angemessenes
            Datenschutzniveau garantiert.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-2">3. Ihre Rechte</h2>
          <p>
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
            jederzeit das Recht auf:
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>
              Auskunft über Ihre gespeicherten personenbezogenen Daten (Art. 15
              DSGVO)
            </li>
            <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
            <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
          </ul>
          <p className="mt-4">
            Zudem haben Sie gemäß Art. 77 DSGVO das Recht, sich bei einer
            zuständigen <strong>Datenschutz-Aufsichtsbehörde</strong> zu
            beschweren.
          </p>
        </section>
      </div>
    </div>
  );
}
