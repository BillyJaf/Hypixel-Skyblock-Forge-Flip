# Hypixel Skyblock Forge-Flipper

In Hypixel skyblock, players can put items into the forge, wait for a few hours and then collect their newly forged item.
As skyblock is a free market, each of the ingredients can be bought from players on the auction house or by placing buy orders in the bazaar. All items that are forged can also be sold.
This application fetches all the relevant data, calculates the cost of buying all the ingredients and tells the user what is the best item to forge for profit.
The application allows for the filtering of bazaar / auction items as well as gemstones, reforge stones, pets and tools. The user can also toggle quick forge and cole-quick forge times and toggle between profit-per-hour and profit-per-forge.   

The project can be found [here](https://prod.dr0l1lxoo4159.amplifyapp.com/).   
The Hypixel API can be found [here](https://api.hypixel.net/).   
The old project that this project expands upon can be found [here](https://github.com/BillyJaf/Hypixel-Skyblock-Forge-Flip-Old).

# Usage

Upon opening the application, there is no pre-existing data. Instead, get requests are sent to both the [bazaar](https://api.hypixel.net/#tag/SkyBlock/paths/~1v2~1skyblock~1bazaar/get) and [auction](https://api.hypixel.net/#tag/SkyBlock/paths/~1v2~1skyblock~1auctions/get) endpoints to retrieve up to date data. The bazaar data should load within 1 second of opening the page, however - due to the large number of auctions at any given moment - the auction data should appear within 1 minute of opening the page. The result is an accurate depiction of the most profitable forge-flips:

<img width="1280" height="679" alt="image" src="https://github.com/user-attachments/assets/d3714b48-9753-40ab-a29e-d6aac39dc276" />

Players with a keen eye will realise that some of these flips are unrealistic. For example, the most profitable flip using the per-hour metric is the Titanium Drill DR-X655 with a forge time of 30 seconds. To actually achieve these rates, the player would need to be physically present to forge the Titanium Drill DR-X655 every 30 seconds, as well as buy the ingredients and find a buyer - a completely unrealistic task. Hence, the player may filter the items by pressing the button at the top left:

<img width="1280" height="677" alt="image" src="https://github.com/user-attachments/assets/84993e8a-facb-4bee-82a3-1be78341cc85" />

By removing items that sell on the auction house, players can find more realistic flips (the bazaar has buy orders and sell offers and hence there will always be a buyer):

<img width="1280" height="677" alt="image" src="https://github.com/user-attachments/assets/67a5dbe8-14df-4838-8edd-a867cdee6389" />

At the top right of the page, there is a settings button that allows players to apply the max-level quick forge perk, the cole quick forge perk, and toggles for
- profit-per-hour / profit-per-forge
- buy orders / insta-buys
- sell offers / insta-sells

<img width="1280" height="676" alt="image" src="https://github.com/user-attachments/assets/ad7e17cc-6384-4cab-936c-b72d74551b94" />

To find the data relating to a specific item, either scroll through the page or directly use the search bar at the top of the page. If the item you are searching for is not able to be selected, make sure you toggle all filters off and try again:

<img width="1280" height="678" alt="image" src="https://github.com/user-attachments/assets/f97a2c04-4222-4470-b9ed-2ea3435b0821" />

Finally, even though the data is loaded fresh every time the user opens the page, if the user is unsatisfied with the data, they may refresh the data by pressing either of the two buttons at the top right (the trolley icon will refetch the bazaar data and the stor icon refetches the auction data):

<img width="1280" height="677" alt="image" src="https://github.com/user-attachments/assets/cbd9be70-3c53-405a-9d73-63d264f9acd2" />


