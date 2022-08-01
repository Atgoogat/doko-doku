import { Player } from './../model/player'
import { TestBed } from '@angular/core/testing'

import { PlayerService } from './player.service'

describe('PlayerService', () => {
  let service: PlayerService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(PlayerService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should return identitiy given 4 players', () => {
    const players = service.playersForRound(getPlayers(4), 1)
    expect(players.length).toBe(4)
  })

  it('should skip no players given 4 players', () => {
    const skippedPlayers = service.skippedPlayers(getPlayers(4), 1)
    expect(skippedPlayers.length).toBe(0)
  })

  it('should skip last player given 5 players and round 1', () => {
    const players = getPlayers(5)
    const skippedPlayers = service.skippedPlayers(players, 1)
    expect(skippedPlayers.length).toBe(1)
    expect(skippedPlayers[0]).toEqual(players[4])

    const playerForRound = service.playersForRound(players, 1)
    expect(playerForRound.length).toBe(4)
    expect(playerForRound).not.toContain(skippedPlayers[0])
  })

  it('should skip first player given 5 players and round 2', () => {
    const players = getPlayers(5)
    const skippedPlayers = service.skippedPlayers(players, 2)
    expect(skippedPlayers.length).toBe(1)
    expect(skippedPlayers[0]).toEqual(players[0])

    const playerForRound = service.playersForRound(players, 2)
    expect(playerForRound.length).toBe(4)
    expect(playerForRound).not.toContain(skippedPlayers[0])
  })

  it('should skip second player given 5 players and round 3', () => {
    const players = getPlayers(5)
    const skippedPlayers = service.skippedPlayers(players, 3)
    expect(skippedPlayers.length).toBe(1)
    expect(skippedPlayers[0]).toEqual(players[1])

    const playerForRound = service.playersForRound(players, 3)
    expect(playerForRound.length).toBe(4)
    expect(playerForRound).not.toContain(skippedPlayers[0])
  })

  it('should skip third and last player given 6 players and round 1', () => {
    const players = getPlayers(6)
    const skippedPlayers = service.skippedPlayers(players, 1)
    expect(skippedPlayers.length).toBe(2)
    expect(skippedPlayers[0]).toEqual(players[2])
    expect(skippedPlayers[1]).toEqual(players[5])

    const playerForRound = service.playersForRound(players, 1)
    expect(playerForRound.length).toBe(4)
    expect(playerForRound).not.toContain(skippedPlayers[0])
    expect(playerForRound).not.toContain(skippedPlayers[1])
  })

  const getPlayers = (count: number): Player[] => {
    const names = [
      'Franka',
      'Luis',
      'Hannah',
      'Ben',
      'Onno',
      'Jana',
      'Tinus',
      'Moritz',
    ]
    return names.slice(0, count).map((n, i) => ({
      id: i,
      name: n,
      startNumber: i,
    }))
  }
})
