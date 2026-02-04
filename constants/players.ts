export enum PLAYERS_PIECE {
    PLAYER_X = 'X',
    PLAYER_O = 'O',
}

export type PlayerPiece = PLAYERS_PIECE.PLAYER_X | PLAYERS_PIECE.PLAYER_O

export enum PLAYER {
    USER = 'usuario',
    COMPUTER = 'computador'
}

export type Player = PLAYER.USER | PLAYER.COMPUTER