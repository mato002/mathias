from _typeshed import Incomplete

from influxdb_client.service._base_service import _BaseService

class RoutesService(_BaseService):
    def __init__(self, api_client: Incomplete | None = ...) -> None: ...
    def get_routes(self, **kwargs): ...
    def get_routes_with_http_info(self, **kwargs): ...
    async def get_routes_async(self, **kwargs): ...
