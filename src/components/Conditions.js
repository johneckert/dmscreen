import "./Components.css";

function Conditions() {
  return (
    <table className="component-body conditions">
      <thead>
      <tr>
        <th>Condition</th>
        <th>Effect</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>Blinded</td>
          <td>
            <li>
              A blinded creature can’t see and automatically fails any ability
              check that requires sight.
            </li>
            <li>
              Attack rolls against the creature have advantage, and the
              creature’s Attack rolls have disadvantage.
            </li>
          </td>
        </tr>
        <tr>
          <td>Charmed</td>
          <td>
            <li>
              A charmed creature can’t Attack the charmer or target the charmer
              with harmful Abilities or magical Effects.
            </li>
            <li>
              The charmer has advantage on any ability check to interact
              socially with the creature.
            </li>
          </td>
        </tr>
        <tr>
          <td>Deafened</td>
          <td>
            <li>
              A deafened creature can’t hear and automatically fails any ability
              check that requires hearing.
            </li>
          </td>
        </tr>
        <tr>
          <td>Frightned</td>
          <td>
            <li>
              A frightened creature has disadvantage on Ability Checks and
              Attack rolls while the source of its fear is within Line of Sight.
            </li>
            <li>
              The creature can’t willingly move closer to the source of its
              fear.
            </li>
          </td>
        </tr>
        <tr>
          <td>Grappled</td>
          <td>
            <li>
              A grappled creature’s speed becomes 0, and it can’t benefit from
              any bonus to its speed.
            </li>
            <li>
              The condition ends if the Grappler is incapacitated (see the
              condition).
            </li>
            <li>
              The condition also ends if an Effect removes the grappled creature
              from the reach of the Grappler or Grappling Effect, such as when a
              creature is hurled away by the Thunderwave spell.
            </li>
          </td>
        </tr>
        <tr>
          <td>Incapacitated</td>
          <td>
            <li>An incapacitated creature can’t take Actions or Reactions.</li>
          </td>
        </tr>
        <tr>
          <td>Invisible</td>
          <td>
            <li>
              An invisible creature is impossible to see without the aid of
              magic or a Special sense. For the Purpose of Hiding, the creature
              is heavily obscured. The creature’s Location can be detected by
              any noise it makes or any tracks it leaves.
            </li>
            <li>
              Attack rolls against the creature have disadvantage, and the
              creature’s Attack rolls have advantage.
            </li>
          </td>
        </tr>
        <tr>
          <td>Paralyzed</td>
          <td>
            <li>
              A paralyzed creature is incapacitated (see the condition) and
              can’t move or speak.
            </li>
            <li>
              The creature automatically fails Strength and Dexterity Saving
              Throws.
            </li>
            <li>Attack rolls against the creature have advantage. </li>
            <li>
              Any Attack that hits the creature is a critical hit if the
              attacker is within 5 feet of the creature.
            </li>
          </td>
        </tr>
        <tr>
          <td>Poisoned</td>
          <td>
            <li>
              A poisoned creature has disadvantage on Attack rolls and Ability
              Checks.
            </li>
          </td>
        </tr>
        <tr>
          <td>Prone</td>
          <td>
            <li>
              A prone creature’s only Movement option is to crawl, unless it
              stands up and thereby ends the condition.
            </li>
            <li>The creature has disadvantage on Attack rolls.</li>
            <li>
              An Attack roll against the creature has advantage if the attacker
              is within 5 feet of the creature. Otherwise, the Attack roll has
              disadvantage.
            </li>
          </td>
        </tr>
        <tr>
          <td>Restrained</td>
          <td>
            <li>
              A restrained creature’s speed becomes 0, and it can’t benefit from
              any bonus to its speed.
            </li>
            <li>
              Attack rolls against the creature have advantage, and the
              creature’s Attack rolls have disadvantage.
            </li>
            <li>The creature has disadvantage on Dexterity Saving Throws.</li>
          </td>
        </tr>
        <tr>
          <td>Stunned</td>
          <td>
            <li>
              A stunned creature is incapacitated (see the condition), can’t
              move, and can speak only falteringly.
            </li>
            <li>
              The creature automatically fails Strength and Dexterity Saving
              Throws. Attack rolls against the creature have advantage.
            </li>
          </td>
        </tr>
        <tr>
          <td>Unconscious</td>
          <td>
            <li>
              An unconscious creature is incapacitated (see the condition),
              can’t move or speak, and is unaware of its surroundings
            </li>
            <li>The creature drops whatever it’s holding and falls prone.</li>
            <li>
              The creature automatically fails Strength and Dexterity Saving
              Throws.
            </li>
            <li>
              Attack rolls against the creature have advantage. Any Attack that
              hits the creature is a critical hit if the attacker is within 5
              feet of the creature.
            </li>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Conditions;
