#version 330 core
uniform sampler2D u_Sampler1;
uniform sampler2D u_Sampler2;

uniform float u_Time;

in vec2 f_TexCoord;
out vec4 o_Color;

void main()
{
	vec2 TexCoord = f_TexCoord;
	TexCoord.y = 1.0 - TexCoord.y;

	vec4 Image1 = texture(u_Sampler1, TexCoord);
	vec4 Image2 = texture(u_Sampler2, TexCoord);

	o_Color = mix(Image1, Image2, sin(u_Time) * 0.5 + 0.5);
}