import React from "react";
import NextLink from "next/link";

import {
  getFilmPosterImageUrl,
  getYearFromDateString,
  getShortenedString
} from "../../utils";
import {
  Link,
  Wrapper,
  Poster,
  InformationWrapper,
  Title,
  ReleaseYear,
  Directors,
  Description
} from "./styled";

const FilmListElement: React.FC<Film> = ({
  slug,
  encryptedUrlId,
  title,
  releaseDate,
  directors,
  description
}) => (
  <NextLink
    href={{ pathname: "/film-detail-showtimes", query: { slug } }}
    as={`/films/${slug}`}
    passHref
  >
    <Link>
      <Wrapper>
        <Poster src={getFilmPosterImageUrl(encryptedUrlId)} alt={title} />
        <InformationWrapper>
          <Title>{title}</Title>
          <ReleaseYear>{` (${getYearFromDateString(
            releaseDate
          )})`}</ReleaseYear>
          <Directors>{directors}</Directors>
          <Description>{getShortenedString(description, 200)}</Description>
        </InformationWrapper>
      </Wrapper>
    </Link>
  </NextLink>
);

export default FilmListElement;
