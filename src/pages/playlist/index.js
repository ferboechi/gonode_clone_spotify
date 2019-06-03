import React from 'react';

import { Container, Header, SongList } from './styles';

import ClockIcon from '../../assets/images/clock.svg';

import PlusIcon from '../../assets/images/plus.svg';



const Playlist = () => (
  <Container>
    <Header>
      <img
        src="http://www.thexfactor.com.br/wp-content/uploads/2015/09/Little-Mix-Hair-2015-Single-Cover.png"
        alt="Cover"
      />

      <div>
        <span>PLAYLIST</span>
        <h1>Rocke forever</h1>
        <p>13 musicas</p>
        <button>Play</button>
      </div>
    </Header>

    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Titulo</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th>
          <img src={ClockIcon} alt="Duração" />
        </th>
      </thead>

      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Link Park</td>
          <td>Hybrid Theory</td>
          <td>3:12</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Link Park</td>
          <td>Hybrid Theory</td>
          <td>3:12</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Link Park</td>
          <td>Hybrid Theory</td>
          <td>3:12</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Link Park</td>
          <td>Hybrid Theory</td>
          <td>3:12</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Link Park</td>
          <td>Hybrid Theory</td>
          <td>3:12</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Link Park</td>
          <td>Hybrid Theory</td>
          <td>3:12</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Link Park</td>
          <td>Hybrid Theory</td>
          <td>3:12</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Link Park</td>
          <td>Hybrid Theory</td>
          <td>3:12</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Link Park</td>
          <td>Hybrid Theory</td>
          <td>3:12</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Papercut</td>
          <td>Link Park</td>
          <td>Hybrid Theory</td>
          <td>3:12</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
