export class Render {
    private gl: WebGLRenderingContext;

    /**初始化渲染器 */
    public init(canvas: HTMLCanvasElement) {
        this.gl = canvas.getContext('webgl');
        if (!this.gl) {
            console.log('设备不支持webgl渲染');
        }
        this.gl.clearColor(0, 0, 0, 1);
    }


    /**创建shader */
    private createShader(type: number, source: string): WebGLShader {
        const gl = this.gl;
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        return shader;
    }

    /**创建程序 */
    public createProgram(vertexSource: string, fragmentSource: string): WebGLProgram {
        const gl = this.gl;
        const vertexShader = this.createShader(gl.VERTEX_SHADER, vertexSource);
        const fragmentShader = this.createShader(gl.FRAGMENT_SHADER, fragmentSource);
        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        return program;
    }

    /**绘制 */
    private draw(program: WebGLProgram) {
        const gl = this.gl;
        gl.useProgram(program);
        // gl.dra
    }

    /**一帧渲染 */
    private render() {
        const gl = this.gl;
        gl.clear(gl.COLOR_BUFFER_BIT);


    }
}


export const render = new Render();