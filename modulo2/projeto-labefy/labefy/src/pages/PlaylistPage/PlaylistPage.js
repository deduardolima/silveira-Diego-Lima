import React from "react";
import axios from "axios";
import { BASE_URL } from '../../constants/urls'
import { PlaylistCard } from './styled'
import { BotaoDelete } from './styled'
import {BotaoAcessar} from './styled'
import {MainContainer} from './styled'
import {DivInput}   from './styled'
import {BotaoCriar} from './styled'
import {Input} from './styled'
import {Titulo} from './styled'
import DetalhesPlaylist from "../DetalhesPlaylist/DetalhesPlaylist";


const headers = {
    headers: {
        Authorization: "diego-lima-silveira"
    }
}

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/"
export default class PlaylistPage extends React.Component {
    state = {
        lista: [],
        inputNome: ""
    }

    componentDidMount() {
        this.getPlaylists()

    }


    getPlaylists = () => {
        axios.get(BASE_URL, headers)
            .then((res) =>
                this.setState({ lista: res.data.result.list }))
            .catch((err) =>
                console.log(err.response))
    }


    criarPlaylist = () => {

        const body = {
            name: this.state.inputNome
        }

        axios.post(BASE_URL, body, headers)
            .then((res) => {
                this.setState({ inputNome: "" })
                this.getPlaylists()
            })
            .catch((err) =>
                console.log(err.response))
    }

    deletarPlaylist = (id) => {

        axios.delete(`${BASE_URL}/${id}`, headers)
            .then((res) => {
                alert("Playlist deletada com sucesso")
                this.getPlaylists()
            }).catch((err) =>
                console.log(err.response.data))


    }

    onChangeInputNome = (e) => {
        this.setState({ inputNome: e.target.value })

    }



    render() {
                const listPlaylist = this.state.lista.map((playlist) => {
            return (
                <PlaylistCard
                    key={playlist.id}
                >
                    <BotaoAcessar onClick={() => this.props.irParaDetalhePlaylist(playlist.id)}                                            
                                      
                    
                    >Acessar Playlist {playlist.name.toUpperCase()} </BotaoAcessar>
                    <BotaoDelete onClick={() => this.deletarPlaylist(playlist.id)}>X</BotaoDelete>
                    
                </PlaylistCard>)

        })


        console.log(this.state.lista)
        return (

            <MainContainer>
                <Titulo>Bem-Vindo à </Titulo>
                <Titulo>Labefy</Titulo>
                <DivInput>
                    <Input placeholder={"Nome da Playlist"}
                        value={this.state.inputNome}
                        onChange={this.onChangeInputNome}
                    />
                    <BotaoCriar onClick={this.criarPlaylist}>Criar Playlist</BotaoCriar>

                </DivInput>
                <div>
                    {listPlaylist}
                </div>
            </MainContainer>

        )


    }

}