import React from 'react';


import {
  Container, Title, List, Playlist,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>
    <List>
      <Playlist to="/playlists/1">
        <img
          src="http://www.thexfactor.com.br/wp-content/uploads/2015/09/Little-Mix-Hair-2015-Single-Cover.png"
          alt="Cover"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxa enquanto ouve as melhores musicas</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="http://www.thexfactor.com.br/wp-content/uploads/2015/09/Little-Mix-Hair-2015-Single-Cover.png"
          alt="Cover"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxa enquanto ouve as melhores musicas</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="http://www.thexfactor.com.br/wp-content/uploads/2015/09/Little-Mix-Hair-2015-Single-Cover.png"
          alt="Cover"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxa enquanto ouve as melhores musicas</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="http://www.thexfactor.com.br/wp-content/uploads/2015/09/Little-Mix-Hair-2015-Single-Cover.png"
          alt="Cover"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxa enquanto ouve as melhores musicas</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
