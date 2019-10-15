import FilmDetailShowtimesContainer from "../src/components/FilmDetailShowtimes/Container";
import { Main } from "../src/components/styled";
import { Component } from "react";

class FilmDetailShowtimesPage extends Component<{ slug: string }> {
  static getInitialProps({ query: { slug } }: { query: { slug: string } }) {
    return { slug };
  }

  render() {
    const { slug } = this.props;

    return (
      <Main>
        <FilmDetailShowtimesContainer slug={slug} />
      </Main>
    );
  }
}

export default FilmDetailShowtimesPage;
