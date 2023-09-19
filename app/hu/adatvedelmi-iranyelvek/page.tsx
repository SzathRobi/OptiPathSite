import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const PrivacyPolicyPage = () => {
	const optipathName = 'OptiPath';
	const optipathEmail = 'info@optipath.com';

	return (
		<>
			<Link href="/hu" className="absolute top-6 left-8 underline">
				{'<--'} Vissza a főoldalra
			</Link>
			<section className="container pt-16">
				<Card className="py-8">
					<CardContent>
						<article className="mb-12">
							<h2 className="text-2xl font-bold mb-4">
								Adatvédelmi Nyilatkozat (Privacy Policy)
							</h2>
							<p className="mb-4">
								Ez az Adatvédelmi Nyilatkozat részletezi, hogy
								hogyan gyűjtjük, használjuk és védelmezzük az Ön
								személyes adatait az {optipathName}
								weboldalán vagy alkalmazásában történő látogatás
								és használat során. Kérjük, olvassa el
								figyelmesen az alábbiakat.
							</p>
						</article>

						<article className="mb-12">
							<h2 className="text-2xl font-bold mb-4">
								Adatok Gyűjtése és Felhasználása:
							</h2>
							<p className="mb-4">
								Amikor feliratkozik hírlevelünkre, az Ön által
								megadott e-mail címet a szolgáltatásunk
								használatához rögzítjük, hogy Önnek időről időre
								hírleveleket és tájékoztatókat küldhessünk.
							</p>
							<p className="mb-4">
								A Google Analytics segítségével weboldalunk
								látogatottságát és felhasználói viselkedést
								követjük nyomon. Ezek az adatok névtelenül
								gyűjtésre kerülnek, és céljuk a weboldal
								fejlesztése és a felhasználói élmény
								optimalizálása.
							</p>
						</article>

						<article className="mb-12">
							<h2 className="text-2xl font-bold mb-4">
								Adatvédelem és Biztonság:
							</h2>
							<p className="mb-4">
								Az Ön személyes adatait bizalmasan kezeljük, és
								megfelelő biztonsági intézkedéseket alkalmazunk
								az illetéktelen hozzáférés megakadályozása
								érdekében.
							</p>
							<p className="mb-4">
								Az Ön személyes adatait soha nem adjuk tovább,
								nem értékesítjük vagy osztjuk meg harmadik
								felekkel, kivéve, ha erre a jogszabályok vagy
								hatósági rendeletek előírják.
							</p>
						</article>

						<article className="mb-12">
							<h2 className="text-2xl font-bold mb-4">
								Az Ön Jogai:
							</h2>
							<p className="mb-4">
								Bármikor kérheti személyes adataihoz való
								hozzáférést, módosítást vagy törlést.
							</p>
							<p className="mb-4">
								Leiratkozhat hírlevelünkről a benne található
								leiratkozási link segítségével.
							</p>
						</article>

						<article className="mb-12">
							<h2 className="text-2xl font-bold mb-4">Cookies</h2>
							<p className="mb-4">
								A weboldalunk sütiket (cookies) használhat,
								amelyek kisméretű fájlok adatait tárolják az Ön
								böngészőjében. Ezeket a sütiket elsősorban a
								weboldal működésének optimalizálásához és a
								felhasználói élmény javításához használjuk.
							</p>
							<p className="mb-4">
								Ez az Adatvédelmi Nyilatkozat 2023. augusztus
								10-én hatályba lép. Fenntartjuk a jogot, hogy
								bármikor módosítsuk ezt az Adatvédelmi
								Nyilatkozatot, így érdemes időnként visszatérni,
								hogy tájékozódjon a legfrissebb változatokról.
							</p>
							<p className="mb-4">
								Amennyiben kérdése vagy észrevétele van az
								Adatvédelmi Nyilatkozatunkkal kapcsolatban,
								kérjük, lépjen kapcsolatba velünk az{' '}
								{optipathEmail} címen.
							</p>
						</article>
					</CardContent>
				</Card>
			</section>
		</>
	);
};

export default PrivacyPolicyPage;
