package com.bichos.handlers;

import io.vertx.core.Handler;
import io.vertx.ext.web.RoutingContext;

public interface ApiErrorHandler extends Handler<RoutingContext> {

  @Override
  void handle(RoutingContext context);

}
