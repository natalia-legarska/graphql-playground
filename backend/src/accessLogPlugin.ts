import {GraphQLRequestContext} from "apollo-server-plugin-base";

export const accessLogs: Array<{ timestamp: string; operationName: string; userId: string }> = [];

export const accessLogsPlugin = {
    async requestDidStart(requestContext: GraphQLRequestContext<any>) {
        return {
            async didResolveOperation(context) {
                if (context.request.operationName && context.context.user) {
                    accessLogs.push({
                        timestamp: new Date().toISOString(),
                        operationName: context.request.operationName,
                        userId: context.context.user.id,
                    });
                }
            },
        };
    }
}