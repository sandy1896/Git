import turtle

def drawSnake(rad,angle,len,neckrad):
    for i in range(2):
        turtle.circle(-rad,angle)
        turtle.circle(rad,angle)
    for i in range(3):
        turtle.circle(rad,angle)
        turtle.circle(-rad,angle)
    turtle.circle(rad,angle/2)
    turtle.fd(rad)
    turtle.circle(neckrad+1,180)
    turtle.fd(rad*2/3)

def main():
    turtle.setup(1250,500,0,0)
    pythonsize=30
    turtle.pensize(pythonsize)
    turtle.pencolor("#3B9909")
    turtle.seth(-40)
    drawSnake(40,80,5,pythonsize/2)

main()