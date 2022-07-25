export class Message {
    constructor(public content: string,
                public time: string,
                public sentByMe: boolean,
                public isMessageRead: boolean) {
    }
}