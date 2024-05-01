import {
  BASE_URL,
  SEARCH_BY_GENRE_PATH,
  SEARCH_BY_NAME_PATH,
} from '../../src/constants/apiConstant';
import { GENRE_MOCK } from '../fixtures/genre.mock';
import { AVATAR_MOVIE_INFO, GET_SEARCH_MOCK } from '../fixtures/search.mock';

describe('Testing ModsenYouTube', () => {
  it('(SEARCH TESTING) Testing search by movie title. (MOVIE_CARDS TESTING) Availability and matching of names, years, genres, and resources in displayed films', () => {
    cy.visit('http://localhost:8080/');
    cy.get('input').type(AVATAR_MOVIE_INFO.alternativeName ?? AVATAR_MOVIE_INFO.name);
    cy.intercept(
      'GET',
      BASE_URL +
        SEARCH_BY_NAME_PATH(1, AVATAR_MOVIE_INFO.alternativeName ?? AVATAR_MOVIE_INFO.name, 16),
      req => {
        req.reply({ body: GET_SEARCH_MOCK(AVATAR_MOVIE_INFO, 16), statusCode: 200 });
      },
    ).as('searchByName');
    cy.get('form').submit();
    cy.get('main').each(value => {
      cy.wrap(value)
        .get('[data-test-id="movie-name-id"]')
        .should(
          'contain.text',
          `${AVATAR_MOVIE_INFO.alternativeName ?? AVATAR_MOVIE_INFO.name} · ${AVATAR_MOVIE_INFO.year}`,
        );
      cy.wrap(value)
        .get('[data-test-id="movie-genres-id"]')
        .each(value => {
          cy.wrap(value).should(
            'have.text',
            AVATAR_MOVIE_INFO.genres.map(el => el.name.toUpperCase()).join(''),
          );
        });
      cy.wrap(value).get('img').should('have.attr', 'src', `${AVATAR_MOVIE_INFO.poster.url}`);
    });
  });

  it('(TESTING GENRES) Testing - filtering by genre', () => {
    const currentGenre = GENRE_MOCK.docs[0].genres[2].name;
    cy.visit('http://localhost:8080/');
    cy.intercept('GET', BASE_URL + SEARCH_BY_GENRE_PATH(1, currentGenre, 16), req => {
      req.reply({ body: GENRE_MOCK, statusCode: 200 });
    }).as('searchByName');
    cy.get(`[data-test-id="${currentGenre}"]`).click();
    cy.get('[data-test-id="movie-genres-id"]').each(value => {
      cy.wrap(value).contains(`${currentGenre.toUpperCase()}`);
    });
  });

  it('(TESTING THEME) Testing theme change', () => {
    cy.visit('http://localhost:8080/');
    cy.get('[data-test-id="theme-id"]').click();
    cy.get('main').should('have.css', 'background-color').and('equal', 'rgb(56, 56, 56)');
  });
});
