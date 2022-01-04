function Obscurity() {
    //should make up own descriptions
    return (
        <div className="component">
            <header>Obscurity</header>
            <table>
                <tr>
                    <td>Lightly Obscurred</td>
                    <td>Dim light, patchy fog, or moderate foliage.</td>
                    <td>Creatures have disadvantage on Perception checks.</td>
                </tr>
                <tr>
                    <td>Heavily Obscurred</td>
                    <td>Darkness, opaque fog, or dense foliage</td>
                    <td>A creature suffers from the blinded condition when trying to see something in the area.</td>
                </tr>
            </table>
        </div>
        )
}

export default Obscurity;