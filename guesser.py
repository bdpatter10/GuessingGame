from asyncio.windows_events import NULL
import random
from turtle import end_fill


loop = True
tryAgain = True
score = 0

def success():
    global score
    print("CORRECT!")
    score = score + 1
    print("Score = ", score)
    
def failure():
    global loop
    print("WRONG")
    print("\nGAME OVER")
    loop = False

def validateInput(input, game):
    valid = True
    print("The read input is: ", input)
    if(game == 1):
        if(input == '1' or input == '2'):
            valid = True
        else:
            valid = False
    else:
        if(input == '1' or input == '2' or input == '3'):
            valid = True
        else:
            valid = False
    return valid

def findTryAgain():
    global tryAgain, loop
    isTryAgain = input("\nWould you like to play again? (1 for yes, 2 for no) ")
    if(validateInput(isTryAgain,1)):        
        isTryAgain = int(isTryAgain)
        if(isTryAgain == 1):
            tryAgain = True
            loop = True
            print("tryAgain was true: ", tryAgain)
        else:
            tryAgain = False
            print("tryAgain was false No retry")
    else:
        print("\ninvalid input.\n\n Did not try again\n")
        tryAgain = False

def playGame1():
    global loop
    while loop==True:
            rand = random.randint(1,2)
            print(rand)

            guess = input("What is your Guess? (enter 1 or 2)")
            print("your Guess is: " + guess)
            # if(guess == '1' or guess == '2'):
            if(validateInput(guess,1)):
                guess = int(guess)

                if(rand == 1):
                    left = True
                    if(guess == 1):
                        success()
                    else:
                        failure()
                        loop = False
                else:
                    right = True
                    if(guess == 2):
                        success()
                    else:
                        failure()
                        loop = False
            else:
                print("\nPLEASE ENTER A VALID NUMBER\n")

def playGame2():
    global loop
    while loop == True:
        rand = random.randint(1,3)
        print(rand)

        guess = input("What is your Guess? (enter 1, 2 or 3) ")
        print("your Guess is: " + guess)
        # if(guess == '1' or guess == '2'):
        if(validateInput(guess,2)):
            guess = int(guess)

            if(rand == 1):
                left = True
                if(guess == 1):
                    success()
                else:
                    failure()
                    loop = False

            elif (rand == 2):
                middle = True
                if(guess == 2):
                    success()
                else:
                    failure()
                    loop = False

            else:
                right = True
                if(guess == 3):
                    success()
                else:
                    failure()
                    loop = False
        else:
            print("\nPLEASE ENTER A VALID NUMBER\n")

def playGame3():
    global loop
    while loop == True:
        fall = random.randint(1,3)
        print(fall)

        guess = input("What is your Guess? (enter 1, 2 or 3) ")
        print("your Guess is: " + guess)

        if(validateInput(guess,2)):
            guess = int(guess)
        
            if(fall == 1):
                if(guess == 1):
                    failure()
                    # loop = False
                else:
                    success()
            elif(fall == 2):
                if(guess == 2):
                    failure()
                else:
                    success()
            elif(fall == 3):
                if(guess == 3):
                    failure()
                else:
                    success()
            else:
                print("Input not recognized")
        else:
            print("\nPLEASE ENTER A VALID NUMBER\n")

        

choice = input("What game do you want to play? (1: 1/2, 2: 1/3, 3: 2/3)")
if(validateInput(choice,2)):
    choice = int(choice)


while tryAgain == True:
    score = 0
    #1/2
    if(choice == 1):
        playGame1()
        findTryAgain()
    #1/3
    if(choice == 2):
        playGame2()
        findTryAgain()   
    #2/3
    if(choice == 3):
        playGame3()
        findTryAgain()

#TODO Add do you want to change games









