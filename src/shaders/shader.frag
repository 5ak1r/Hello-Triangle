//fragment shader is invoked on fragments made by vertex shader to produce a color and depth for the framebuffer(s)

#version 450

//linked to vertex shader by index of location directive
layout(location = 0) in vec3 fragColor;

layout(location = 0) out vec4 outColor;

void main() {
    outColor = vec4(fragColor, 1.0);
}