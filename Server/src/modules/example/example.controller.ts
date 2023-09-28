import { Controller, Get } from "@nestjs/common";

@Controller('example')
export class ExampleController {
    @Get()
    getHello(): string {
        return 'Hello from the example controller!';
    }
}