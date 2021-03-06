package com.bichos.services;

import com.bichos.models.Player;
import com.bichos.models.SignupRequest;

import io.vertx.core.Future;

public interface AuthenticationService {

  Future<String> login(String username, String password);

  Future<String> authenticateToken(String token);

  Future<Void> addWebsocketSession(String sessionId, String playerId);

  Future<Void> removeWebsocketSession(String sessionId);

  Future<Void> signUp(SignupRequest player);

  Future<Player> findPlayerById(String playerId);

}
