/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */

import { CardList } from "components/CardList"
import Link from "next/link"
import { IHomeProps } from "pages"

import * as S from "./styles"
export function HomeTemplate({ characters }: IHomeProps) {
  return (
    <>
      <S.BannerContainer>
        <S.BannerContent>
          <h1>MARVEL CHARACTERS</h1>
          <p>
            Get hooked on a hearty helping of heroes and villains from the
            humble House of Ideas!
          </p>
        </S.BannerContent>
      </S.BannerContainer>
      <S.Container>
        <S.Hero>
          <div>
            <h2>
              Exploring a character just got <span>easier</span>
            </h2>
            <h3>
              Learn about your favorite Marvel characters, super heroes, and
              villains! Discover their hqs, events, and more!
            </h3>
          </div>
          <Link href="/character/1009220">
            <img src="/img/shield.png" alt="Shiled" />
          </Link>
        </S.Hero>

        <S.FeaturedCharacters>
          <section>
            <h2>FEATURED CHARACTERS</h2>
            <CardList characters={characters} isFeatured />
          </section>
        </S.FeaturedCharacters>
      </S.Container>
    </>
  )
}
