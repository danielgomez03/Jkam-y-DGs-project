import { Injectable } from "@nestjs/common";

@Injectable()
export class ExampleService {
    getHello(): string {
        return 'Hello from the example service!';
    }
}