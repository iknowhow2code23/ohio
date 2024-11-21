# Simple script to greet and display a list of games

def greet_and_list_games():
    print("Hi!")
    print("Here are some games you might like:")
    
    games = [
        "The Legend of Zelda: Breath of the Wild",
        "Minecraft",
        "Among Us",
        "Fortnite",
        "Grand Theft Auto V",
        "Red Dead Redemption 2",
        "Overwatch",
        "Animal Crossing: New Horizons"
    ]
    
    for game in games:
        print(f"- {game}")
        
# Call the function
greet_and_list_games()
