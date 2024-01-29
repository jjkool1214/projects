
def cum_read():
    balls = []
    with open("wordes.txt") as file:
        for line in file:
            balls.append(line)
    return balls

def cum_sort(balls):
    with open("words.txt", "a") as file:
        for cum in balls:
            file.write("\""+cum[0:len(cum)-1]+"\",\n")
    



def main():
    thing = cum_read()
    cum_sort(thing)

main()
