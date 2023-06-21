import Image from "next/image"
import { API } from "../../assets/api/api"
import { CharacterType, ResponseType } from "../../assets/api/rick-and-morty-api"
import { Header } from "../../components/Header/Header"
import { PageWrapper } from "../../components/PageWrapper/PageWrapper"

export const getStaticProps = async () => {
	const characters = await API.rickAndMorty.getCharacters()

	return {
		props: {
			characters
		}
	}
}

type PropsType = {
	characters: ResponseType<CharacterType>
}

const Characters = (props: PropsType) => {
	const { characters } = props
	return (
		<div>
			<PageWrapper>
				<Header />
				<Image
					src="/next.svg"
					alt="Next.js Logo"
					width={180}
					height={37}
					priority
				/>
				<p>Characters</p>
			</PageWrapper>
		</div>
	)
}

export default Characters