import UnsubscribeForm from '@/components/newsletter/unsubscribe-form';
import Link from 'next/link';

const UnsubscribePage = () => {
	return (
		<>
			<Link href="/hu" className="absolute top-6 left-8 underline">
				{'<--'} Vissza a főoldalra
			</Link>

			<section className="container max-w-5xl py-16 min-h-screen flex flex-col items-center justify-center">
				<h1 className="text-4xl mb-16">Leiratkozás a hírlevélről</h1>

				<p className="text-xl mb-8">
					Bár sajnáljuk, hogy elveszítjük Önt hírlevelünk olvasói
					közül, de megértjük, hogy időnként változnak az érdeklődési
					körök és igények. Kérjük, erősítse meg a leiratkozási
					szándékát az alábbiakban.
				</p>

				<p className="text-xl mb-12">
					Az alábbi mezők kitöltésével leiratkozhat hírlevelünkről.
					Kérjük, adja meg az e-mail címét, amellyel feliratkozott,
					majd kattintson a &quot;Leiratkozás&quot; gombra.
				</p>

				<UnsubscribeForm lang="hu" />

				<p className="text-slate-300">
					Köszönjük, hogy időt szánt arra, hogy hírlevelünket olvassa.
					Reméljük, hogy az elkövetkező időszakban ismét érdeklődni
					fog az ajánlataink iránt. Ha bármikor úgy érzi, hogy újra
					csatlakozna hozzánk, kérjük, látogasson el weboldalunkra és
					iratkozzon fel ismét.
				</p>
			</section>
		</>
	);
};

export default UnsubscribePage;
