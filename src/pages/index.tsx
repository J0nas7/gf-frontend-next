// External
import { faUserFriends, faUsers, faTrophy, faMapSigns, faGamepad } from '@fortawesome/free-solid-svg-icons'

// Internal
import { Block, FlexibleBox } from "@/components"

export default function Home() {
  return (
    <Block className="w-full !grid grid-wrapper max-cols-4">
      <FlexibleBox title="Favorite Friends" icon={faUserFriends}>
        <ul>
          <li className="flex items-center mb-4 hover:bg-gray-700 rounded-md">
            <img className="w-10 h-10 rounded-full border-2 border-gray-600 mr-3" src="http://dev.gamingfriends.gg/images/profileanders.jpg" />
            <span className="text-white flex-1">Username</span>
            <button>
              <i className="fas fa-comment text-gray-400 hover:text-white" aria-hidden="true"></i>
            </button>
          </li>
          <li className="flex items-center mb-4 hover:bg-gray-700 rounded-md">
            <img className="w-10 h-10 rounded-full border-2 border-gray-600 mr-3" src="http://dev.gamingfriends.gg/images/profileanders.jpg" />
            <span className="text-white flex-1">Username</span>
            <button>
              <i className="fas fa-comment text-gray-400 hover:text-white" aria-hidden="true"></i>
            </button>
          </li>
          <li className="flex items-center mb-4 hover:bg-gray-700 rounded-md">
            <img className="w-10 h-10 rounded-full border-2 border-green-600 mr-3" src="http://dev.gamingfriends.gg/images/profileanders.jpg" />
            <span className="text-white flex-1">Username</span>
            <button>
              <i className="fas fa-comment text-gray-400 hover:text-white" aria-hidden="true"></i>
            </button>
          </li>
        </ul>
      </FlexibleBox>
      <FlexibleBox title="Favorite Communities" icon={faUsers}>
        <ul>

          <li className="flex items-center mb-4 hover:bg-gray-700 rounded-md">
            <img className="w-10 h-10 rounded-full border-2 border-gray-600 mr-3" src="http://dev.gamingfriends.gg/images/communities/dave.png" />
            <span className="text-white flex-1">DaveTestas Lair</span>
          </li>

        </ul>
      </FlexibleBox>
      <FlexibleBox title="My Teams" icon={faUsers}>
        <ul>

          <li className="flex items-center mb-4 hover:bg-gray-700 rounded-md">
            <img className="w-10 h-10 rounded-full border-2 border-gray-600 mr-3" src="http://dev.gamingfriends.gg/images/teamlogo/sorbylogo.png" />
            <span className="text-white flex-1">Team Name</span>
          </li>
          <li className="flex items-center mb-4 hover:bg-gray-700 rounded-md">
            <img className="w-10 h-10 rounded-full border-2 border-gray-600 mr-3" src="http://dev.gamingfriends.gg/images/teamlogo/sorbylogo.png" />
            <span className="text-white flex-1">Team Name</span>
          </li>
          <li className="flex items-center mb-4 hover:bg-gray-700 rounded-md">
            <img className="w-10 h-10 rounded-full border-2 border-gray-600 mr-3" src="http://dev.gamingfriends.gg/images/teamlogo/sorbylogo.png" />
            <span className="text-white flex-1">Team Name</span>
          </li>

        </ul>
      </FlexibleBox>
      <FlexibleBox title="Achievements" icon={faTrophy}>
        <ul>

          <li className="flex justify-between items-center mb-4">
            <span className="text-white flex-1">Visited 3 day streak</span>
            <span className="text-xs text-green-400">400 XP </span>
          </li>

        </ul>

      </FlexibleBox>
      <FlexibleBox title="New Guides" className='text-green-600 font-extrabold' icon={faMapSigns}>
        <ul>

          <li className="flex items-center mb-4 hover:bg-gray-700 rounded-md">
            <img className="w-10 h-10 rounded-full border-2 border-gray-600 mr-3" src="http://dev.gamingfriends.gg/images/games/logo/Logo_LOL.png"/>
              <span className="text-white flex-1">How not to die to a tower</span>
          </li>
          <li className="flex items-center mb-4 hover:bg-gray-700 rounded-md">
            <img className="w-10 h-10 rounded-full border-2 border-gray-600 mr-3" src="http://dev.gamingfriends.gg/images/games/logo/Logo_CSGO.png"/>
              <span className="text-white flex-1">Best Grenades on Mirage</span>
          </li>

        </ul>
      </FlexibleBox>
      <FlexibleBox title="Recently teams created" numberOfColumns={2} icon={faGamepad}>
        <ul>
          <li className="flex items-center mb-4 hover:bg-gray-700 rounded-md">
            <img className="w-10 h-10 rounded-full mr-3" src="http://dev.gamingfriends.gg/images/games/logo/Logo_LOL.png" alt="Game Logo" />
            <img className="w-10 h-10 rounded-full mr-3" src="http://dev.gamingfriends.gg/images/teamlogo/sorbylogo.png" alt="Team Logo" />
            <span className="text-white flex-1">Team Name</span>
            <span className="text-white">03:32 - 16/12-2023</span>
          </li>
          <li className="flex items-center mb-4 hover:bg-gray-700 rounded-md">
            <img className="w-10 h-10 rounded-full mr-3" src="http://dev.gamingfriends.gg/images/games/logo/Logo_CSGO.png" alt="Game Logo" />
            <img className="w-10 h-10 rounded-full mr-3" src="http://dev.gamingfriends.gg/images/teamlogo/sorbylogo.png" alt="Team Logo" />
            <span className="text-white flex-1">Team Name</span>
            <span className="text-white">12:32 - 15/12-2023</span>
          </li>
          <li className="flex items-center mb-4 hover:bg-gray-700 rounded-md">
            <img className="w-10 h-10 rounded-full mr-3" src="http://dev.gamingfriends.gg/images/games/logo/Logo_LOL.png" alt="Game Logo" />
            <img className="w-10 h-10 rounded-full mr-3" src="http://dev.gamingfriends.gg/images/teamlogo/sorbylogo.png" alt="Team Logo" />
            <span className="text-white flex-1">Team Name</span>
            <span className="text-white">03:32 - 16/12-2023</span>
          </li>
        </ul>
      </FlexibleBox>
    </Block>
  )
}
