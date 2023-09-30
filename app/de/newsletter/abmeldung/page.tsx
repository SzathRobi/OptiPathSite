import UnsubscribeForm from '@/components/newsletter/unsubscribe-form';
import Link from 'next/link';

const UnsubscribePage = () => {
	return (
		<>
			<Link href="/de" className="absolute top-6 left-8 underline">
				{'<--'} Zurück zur Hauptseite
			</Link>

			<section className="container max-w-5xl py-16 min-h-screen flex flex-col items-center justify-center">
				<h1 className="text-4xl mb-16">Vom Newsletter abmelden</h1>

				<p className="text-xl mb-8">
					Es tut uns leid, dass Sie sich von unserem Newsletter
					abmelden, aber wir verstehen, dass sich Interessen und
					Vorlieben von Zeit zu Zeit ändern. Bitte bestätigen Sie Ihre
					Abmeldeabsicht untenstehend.
				</p>

				<p className="text-xl mb-12">
					Sie können sich von unserem Newsletter abmelden, indem Sie
					die folgenden Felder ausfüllen. Bitte geben Sie die
					E-Mail-Adresse an, mit der Sie sich angemeldet haben, und
					klicken Sie auf die Schaltfläche &apos;Abmelden&apos;.
				</p>

				<UnsubscribeForm lang="de" />

				<p className="text-slate-300">
					Vielen Dank, dass Sie sich die Zeit genommen haben, unseren
					Newsletter zu lesen. Wir hoffen, dass Sie in Zukunft wieder
					Interesse an unseren Angeboten haben werden. Wenn Sie sich
					jemals wieder anschließen möchten, besuchen Sie bitte unsere
					Website und melden Sie sich erneut an.
				</p>
			</section>
		</>
	);
};

export default UnsubscribePage;
