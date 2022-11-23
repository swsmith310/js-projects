const rollInitialStat = () => (Math.ceil(Math.random() * 18));

let player = {
    stats: {
        STR: rollInitialStat(),
        STA: rollInitialStat(),
        INT: rollInitialStat(),
        WIS: rollInitialStat(),
        CHA: rollInitialStat(),
    },
};

for (stat in player.stats) {
    document.write(
    `
    <script>
        function increase${stat}() {
            document.getElementById("${stat}-label").innerHTML = "${stat}: " + ++player.stats.${stat};
        }
        function decrease${stat}() {
            document.getElementById("${stat}-label").innerHTML = "${stat}: " + --player.stats.${stat};
        }
    </script>
    <div id="stat-box">
        <button class="subStat" id="sub-${stat}" onclick="decrease${stat}()">-</button>
            <span id="${stat}-label">${stat}: ${player.stats[stat]}</span>
        <button class="addStat" id="add-${stat}" onclick="increase${stat}()">+</button>
    </div>
    `
    );
}
