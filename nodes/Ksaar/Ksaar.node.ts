import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class Ksaar implements INodeType {
	description: INodeTypeDescription = {
        // Basic node details will go here
        displayName: 'Ksaar',
        name: 'Ksaar',
        icon: 'file:ksaar.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Ksaar API',
        defaults: {
            name: "Ksaar"
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'KsaarApi',
                required: true,
            },
        ],
        requestDefaults: {
            baseURL: 'https://api.ksaar.fr',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        },
        properties: [
            {
                displayName: 'Resource',
                name: 'resource',
                type: 'options',
                noDataExpression: true,
                options: [
                    {
                        name: 'Record',
                        value: 'record',
                    },
                ],
                default: 'record',
            },
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: [
                            'record',
                        ],
                    },
                },
                options: [
                    {
                        name: 'Get',
                        value: 'get',
                        action: 'Get a record',
                        description: 'Get a record detail',
                        routing: {
                            request: {
                                method: 'GET',
                                url: '/planetary/apod',
                            },
                        },
                    },
                ],
                default: 'get',
            },
        ],
    };
}