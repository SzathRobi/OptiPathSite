import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const PrivacyPolicyPage = () => {
	const optipathName = 'OptiPath';
	const optipathEmail = 'info@optipath.com';

	return (
		<>
			<Link href="/de" className="absolute top-6 left-8 underline">
				{'<--'} Zurück zur Hauptseite
			</Link>
			<section className="container pt-16">
				<Card className="py-8">
					<CardContent>
						<article className="mb-12">
							<h2 className="text-2xl font-bold mb-4">
								Datenschutzerklärung
							</h2>
							<p className="mb-4">
								Diese Datenschutzerklärung erläutert, wie wir
								Ihre personenbezogenen Daten erfassen, verwenden
								und schützen, wenn Sie die {optipathName}{' '}
								Website oder App besuchen und nutzen. Bitte
								lesen Sie dies sorgfältig durch.
							</p>
						</article>

						<article className="mb-12">
							<h2 className="text-2xl font-bold mb-4">
								Datenerfassung und -verwendung:
							</h2>
							<p className="mb-4">
								Wenn Sie sich für unseren Newsletter anmelden,
								speichern wir die von Ihnen angegebene
								E-Mail-Adresse, um Ihnen von Zeit zu Zeit
								Newsletter und Benachrichtigungen senden zu
								können.
							</p>
							<p className="mb-4">
								Mit Google Analytics verfolgen wir die Besuche
								und das Nutzerverhalten auf unserer Website.
								Diese Daten werden anonym erfasst und dienen der
								Verbesserung der Website und der Optimierung der
								Benutzererfahrung.
							</p>
						</article>

						<article className="mb-12">
							<h2 className="text-2xl font-bold mb-4">
								Datenschutz und Sicherheit:
							</h2>
							<p className="mb-4">
								Ihre personenbezogenen Daten werden vertraulich
								behandelt, und wir ergreifen angemessene
								Sicherheitsmaßnahmen, um unbefugten Zugriff zu
								verhindern.
							</p>
							<p className="mb-4">
								Ihre personenbezogenen Daten werden niemals
								weitergegeben, verkauft oder an Dritte
								weitergegeben, es sei denn, dies wird durch
								Gesetze oder behördliche Anordnungen
								vorgeschrieben.
							</p>
						</article>

						<article className="mb-12">
							<h2 className="text-2xl font-bold mb-4">
								Ihre Rechte:
							</h2>
							<p className="mb-4">
								Sie können jederzeit Zugriff auf Ihre
								personenbezogenen Daten anfordern, Änderungen
								vornehmen oder diese löschen lassen.
							</p>
							<p className="mb-4">
								Sie können sich von unserem Newsletter abmelden,
								indem Sie den Abmeldelink im Newsletter
								verwenden.
							</p>
						</article>

						<article className="mb-12">
							<h2 className="text-2xl font-bold mb-4">Cookies</h2>
							<p className="mb-4">
								Unsere Website verwendet Cookies, die kleine
								Dateien sind, die Daten in Ihrem Browser
								speichern. Diese Cookies werden hauptsächlich
								zur Optimierung der Website-Funktionalität und
								Verbesserung der Benutzererfahrung verwendet.
							</p>
							<p className="mb-4">
								Diese Datenschutzerklärung tritt am 10. August
								2023 in Kraft. Wir behalten uns das Recht vor,
								diese Datenschutzerklärung jederzeit zu ändern.
								Es ist daher ratsam, regelmäßig nach
								Aktualisierungen zu suchen.
							</p>
							<p className="mb-4">
								Wenn Sie Fragen oder Anmerkungen zu unserer
								Datenschutzerklärung haben, kontaktieren Sie uns
								bitte unter {optipathEmail}.
							</p>
						</article>
					</CardContent>
				</Card>
			</section>
		</>
	);
};

export default PrivacyPolicyPage;
