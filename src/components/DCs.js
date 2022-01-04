function DCs() {
    //should make up own descriptions
    return (
        <div className="component">
            <header>Difficulty Check (DC)</header>
            <table>
                <tr>
                    <td>Very Easy</td>
                    <td>5</td>
                    <td>In plain sight</td>
                </tr>
                <tr>
                    <td>Easy</td>
                    <td>10</td>
                    <td>Climbing a knotted rope</td>
                </tr>
                <tr>
                    <td>Moderate</td>
                    <td>15</td>
                    <td>Hearing someone approach in armor</td>
                </tr>
                <tr>
                    <td>Hard</td>
                    <td>20</td>
                    <td>Repair a broken carriage wheel</td>
                </tr>
                <tr>
                    <td>Very Hard</td>
                    <td>25</td>
                    <td>Swimming safely through rough water</td>
                </tr>
                <tr>
                    <td>Near Impossible</td>
                    <td>30</td>
                    <td>Track a goblin in a snadstorm at night</td>
                </tr>
            </table>
        </div>
        )
}

export default DCs;