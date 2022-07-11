Search.setIndex({"docnames": ["ev3-motors", "ev3-sensors", "ev3-setup", "example", "faq", "index", "inventory", "overview", "pid", "project", "python-intro"], "filenames": ["ev3-motors.rst", "ev3-sensors.rst", "ev3-setup.rst", "example.rst", "faq.rst", "index.rst", "inventory.rst", "overview.rst", "pid.rst", "project.rst", "python-intro.rst"], "titles": ["EV3 Motors Introduction", "EV3 Sensors Introduction and Low-Pass Filters", "EV3 Setup", "reStructuredText examples", "Frequently Asked Questions", "Welcome to the Pembroke Lego Robot Course 2022 Documentation!", "LEGO Inventory", "Course Overview", "PID Controller", "Project Planning", "Python Introduction"], "terms": {"The": [0, 1, 2, 6, 7, 8, 9], "provid": [0, 1, 6], "collect": [0, 1, 7], "function": [0, 1], "here": [0, 1, 2, 3, 5, 7, 9], "we": [0, 1, 2, 3, 6, 7, 9, 10], "go": [0, 1, 2, 4, 10], "through": [0, 1, 2, 7, 8], "an": [0, 1, 4, 6, 7, 8, 9], "thi": [0, 1, 2, 3, 6, 7, 9, 10], "part": [0, 1, 4, 7, 9, 10], "tutori": [0, 1, 7], "assum": [0, 1], "you": [0, 1, 2, 4, 6, 7, 8, 9, 10], "connect": [0, 1, 7, 10], "via": [0, 1, 8], "usb": 2, "complet": [0, 1, 9], "setup": [0, 1, 5], "section": [0, 1, 3, 7, 10], "befor": [0, 1, 2, 4, 7, 10], "proceed": [0, 1], "also": [0, 1, 2, 3, 7, 9], "attach": [0, 1], "one": [0, 2, 7, 9, 10], "port": [0, 1, 2], "A": [0, 2, 8, 9], "brick": [0, 1, 7, 10], "don": [1, 7, 9, 10], "t": [1, 2, 5, 7, 8, 9, 10], "forget": 7, "when": [0, 1, 2, 7, 9], "want": [0, 1, 2], "start": [2, 7, 10], "new": [0, 2], "have": [0, 2, 3, 6, 7, 9, 10], "end": [0, 1, 3, 5, 7, 9], "previou": [1, 7], "first": [1, 2, 4, 7, 9, 10], "delet": [], "b": [0, 3], "open": [0, 2, 7], "m": 0, "file": [0, 2, 9], "from": [0, 1, 2, 6, 7, 8, 9], "your": [0, 1, 2, 4, 6, 7, 9], "directori": [], "can": [0, 1, 2, 4, 7, 8, 9, 10], "download": 0, "demonstr": [], "some": [0, 1, 2, 3, 7, 9], "give": [2, 7, 9], "basic": [], "interact": [0, 1, 4], "over": [2, 7], "plai": [0, 7, 9], "around": [0, 1, 7], "us": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10], "instruct": 9, "print": [1, 6], "after": [7, 8], "check": [1, 4, 9], "task": [1, 10], "what": [0, 1, 2, 9], "doe": 1, "measur": [8, 9], "let": 3, "s": [1, 2, 3, 6], "inspect": [], "now": [0, 1, 2, 4], "init": [], "disp": [], "iotyp": [], "beep": [2, 4], "indic": [], "As": [0, 9], "know": 7, "alreadi": 7, "output": [2, 8], "string": [], "consol": [], "initi": [], "note": [1, 2, 6, 9], "run": [0, 1, 2, 3, 7], "wireless": [2, 4], "could": [], "follow": [0, 1, 2, 4, 6, 8, 9], "chang": [1, 8], "block": 3, "code": [1, 2, 3, 9], "creat": [0, 1, 2, 7], "final": [7, 8], "success": 1, "signal": [1, 9], "import": [0, 1, 2, 8, 9], "ar": [0, 1, 2, 4, 6, 7, 8, 9, 10], "try": [0, 1, 4], "must": [], "done": [], "command": [0, 1, 2, 4], "outputstart": [], "0": [1, 2, 8], "devic": 2, "motora": [], "do": [0, 3, 4, 7, 9], "otherwis": 0, "noth": [], "userin": [], "while": [0, 1, 2], "strcmp": [], "f": 3, "get": [0, 1, 4, 7, 9], "u": 8, "d": [2, 8], "o": [0, 2], "c": [0, 1, 3], "v": [], "monitor": [], "loop": [1, 8], "condit": [], "enter": 2, "store": [], "variabl": 8, "equal": [], "letter": 0, "so": [0, 1, 2, 4, 6, 7, 9], "next": [2, 4, 7, 10], "time": [0, 1, 2, 5, 7, 8, 9], "won": [], "finish": 9, "close": 2, "increas": [], "motorpow": [], "10": [], "100": [], "outputpow": [], "power": [0, 8], "num2str": [], "valu": [0, 8], "commun": [], "call": [0, 1, 2, 8], "specifi": [0, 9], "suppli": 8, "percentag": [], "rang": [], "which": [0, 1, 6, 9], "why": [], "cap": [], "how": [0, 1, 6, 7, 9, 10], "number": [1, 3, 6], "convert": [], "combin": 1, "vector": [], "string1": [], "string2": [], "notat": [], "pass": [5, 7, 9, 10], "For": [1, 6, 9], "those": 7, "interest": [7, 9], "argument": [], "chain": [], "level": 1, "onli": 7, "matter": 1, "sever": [0, 9], "togeth": [], "cabl": [], "In": [0, 1, 2, 6, 7, 9], "case": 1, "send": 1, "other": [0, 1, 2, 4, 5, 7, 9], "appropri": [], "sinc": 9, "alwai": [0, 1], "work": [2, 7, 9], "singl": [2, 9], "should": [2, 4, 6, 7, 9], "implement": [1, 10], "method": [], "where": [0, 4, 7, 8, 9], "amount": 0, "hint": [], "might": [1, 4, 9], "search": [4, 7, 9], "internet": [], "turn": [0, 1, 2, 4], "integ": 10, "tacho": [], "outputgetcount": [], "displai": [], "angl": 0, "rel": [], "last": [7, 9], "wa": [0, 9], "clear": [], "degre": [0, 2], "comput": [1, 2, 7, 9], "averag": 1, "all": [0, 1, 2, 4], "trigger": [], "result": [], "each": [1, 2, 6, 7, 9, 10], "add": 9, "doesn": [], "ani": [0, 6], "intro": [], "out": [1, 2, 4, 9], "page": [0, 7, 10], "control": [1, 5, 7], "motor": [2, 5, 7], "analys": [], "manipul": 8, "data": 2, "touch": [1, 4], "1": [1, 2, 10], "plotsensor": [], "them": [0, 1, 2, 4, 6, 7, 9], "graph": [], "default": 2, "show": [6, 7, 9], "whether": [4, 9], "press": [1, 2], "It": [1, 2, 7, 10], "laptop": [], "line": [2, 3, 9], "accordingli": 8, "re": [4, 6, 9], "Is": [], "latenc": [], "appear": 2, "button": 1, "few": 7, "allow": [1, 7], "choos": [1, 2, 7], "type": [2, 6], "potenti": [], "wifi": 2, "layer": [], "cours": [2, 4, 9, 10], "port1": [], "mode": [0, 1], "push": [], "html": 3, "4": [], "avail": [0, 9], "return": [1, 9], "bump": [], "reset": 0, "color": 1, "colreflect": [], "reflect": 1, "light": [1, 2, 4, 9], "intens": [], "colambi": [], "ambient": 1, "colcolor": [], "detect": 1, "black": [], "2": [1, 2, 3, 9], "blue": 4, "3": [1, 2], "green": 2, "yellow": [], "5": 9, "red": [], "6": [2, 10], "white": [], "7": [], "brown": [], "ultrason": 1, "usdistcm": [], "distanc": 1, "centimet": [], "max": [], "255": [], "cm": [], "usdistin": [], "inch": [], "uslisten": [], "gyro": [], "gyroang": [], "rotat": 2, "gyror": [], "rate": 8, "per": 0, "second": [0, 9], "tic": 9, "figur": [], "hfig": [], "name": [2, 6, 8], "x": 3, "hplot": [], "plot": [], "set": [2, 6, 7, 9], "inputreadsi": [], "titl": [], "inputdevicegetnam": [], "y": 3, "label": [], "inputdevicesymbol": [], "ylabel": [], "xlabel": [], "axi": [], "xlim": [], "timer": [], "current": [2, 8], "toc": [], "its": [0, 8], "ax": [], "wait": 1, "until": [], "findobj": [], "exit": [2, 4], "object": [0, 1, 2, 9], "anymor": [], "ha": [0, 2, 4, 6, 9], "been": [], "xdata": [], "ydata": [], "drawnow": [], "updat": [], "latest": [3, 7], "redrawn": [], "everi": 7, "restart": 2, "make": [0, 1, 2, 4, 6, 9], "paramet": [0, 8], "top": 2, "easili": 1, "colour": 1, "too": [1, 7, 9, 10], "would": [1, 7, 9], "far": 0, "seem": [], "well": 7, "precis": [], "notic": [0, 1], "see": [0, 1, 2, 7, 9], "sometim": [1, 2, 4, 7, 8], "noisi": [1, 9], "sharpli": 1, "One": 1, "wai": [1, 2, 7, 9], "mitig": 1, "sharp": 1, "becaus": [0, 1, 6, 7, 9], "high": 1, "frequenc": 1, "discret": 1, "exponenti": 1, "weight": [0, 1, 8, 9], "move": [0, 1], "imagin": [1, 9], "origin": [1, 9], "x_0": 1, "x_1": 1, "x_2": 1, "ldot": 1, "smooth": 1, "factor": 1, "alpha": 1, "determin": [1, 10], "aggress": 1, "ll": [1, 9], "Then": [0, 1, 2, 7], "y_0": 1, "y_1": 1, "y_2": 1, "begin": [1, 3, 7], "align": [1, 3], "y_": 1, "k": [1, 5], "x_": 1, "y_k": 1, "word": [1, 9], "take": [1, 4, 8], "mean": 1, "adapt": 1, "customis": 1, "observ": [1, 9], "effect": 1, "more": [0, 1, 7, 8, 9], "detail": [1, 7, 9], "wikipedia": [1, 8], "articl": [1, 8], "program": [1, 9, 10], "custom": [], "extens": 9, "queensland": [], "univers": [], "technolog": [], "Their": [], "inform": [], "found": [], "qut": [], "refer": 7, "quick": [], "introduct": 5, "local": [], "cach": [], "zip": [], "2014": [], "07": [], "16": [], "unzip": [], "folder": [2, 9], "exampl": [0, 9], "home": [], "path": [], "pkp": [], "lego": [2, 7, 9, 10], "document": 9, "includ": [2, 9], "thei": [2, 7], "becom": [], "normal": [], "under": [0, 2], "ribbon": [], "environ": [2, 7], "tab": [0, 2], "On": 2, "instal": [], "requir": [2, 9], "administr": [], "privileg": [], "error": [0, 4, 8], "admin": [], "right": [2, 9], "simpli": 8, "keep": [0, 6], "own": [7, 9], "same": 2, "easiest": [], "confirm": [2, 4], "If": [0, 2, 4, 6, 7, 10], "messag": [], "anoth": 0, "exist": [], "both": [2, 6, 9], "network": 2, "isn": 2, "capabl": 2, "netgear": 2, "dongl": [2, 4], "plug": [2, 4], "menu": 2, "option": 2, "select": [0, 2], "encrypt": 2, "password": 2, "up": [1, 2, 7, 9], "dedic": [2, 7], "There": [0, 1, 2, 6, 7, 10], "none": 2, "capit": [], "ip": 2, "address": 2, "linux": [2, 7], "mac": [], "termin": 2, "window": 2, "cmd": [], "ping": 2, "look": [2, 7], "like": [1, 2, 7], "192": 2, "168": 2, "82": 2, "56": 2, "byte": 2, "64": 2, "icmp_seq": 2, "ttl": 2, "61": 2, "894": 2, "ms": 2, "645": 2, "664": 2, "266": 2, "regularli": 9, "broadcast": [], "about": [4, 7, 8, 9, 10], "nc": [], "ulk": [], "3015": [], "To": [0, 1], "need": [0, 1, 7, 10], "access": [0, 1, 2, 7], "java": [], "class": [2, 7, 9, 10], "outputstreamsend": [], "classpath": [], "javaaddpath": [], "wfaddr": [], "wfport": [], "5555": [], "wfsn": [], "serial": [], "i": [0, 4, 8], "my": [], "104": [], "001653444434": [], "particularli": [], "didn": 9, "perfect": [], "common": [], "issu": [0, 1, 2], "crash": 10, "behav": [], "differ": [0, 8], "These": [1, 9], "two": [4, 7, 9, 10], "problem": 7, "solv": [], "softwar": [], "directli": [], "ensur": [], "onc": [0, 1, 2, 4], "e": [0, 8], "g": [0, 9], "cannot": [0, 2], "good": [2, 9], "idea": [5, 7, 9], "clearvar": [], "help": [0, 4, 7, 9], "thing": 0, "addit": [], "hardwar": [], "sensor": [0, 2, 5, 7, 9, 10], "nois": [], "read": [0, 1], "stop": [1, 7], "moment": [], "therefor": [], "incred": [], "design": [7, 8, 9], "system": 8, "possibl": 9, "step": [4, 6], "mention": [], "abov": [1, 2], "tachomet": [], "rather": 9, "than": [0, 7, 9], "delai": [], "mani": [1, 6, 9, 10], "emphasi": 3, "strong": 3, "liter": 3, "subscript": 3, "superscript": 3, "nest": 3, "bullet": 3, "list": 3, "definit": [3, 9], "term": [3, 8], "real": 3, "quot": 3, "miert": 3, "kolostorban": 3, "keressuk": 3, "kurvat": 3, "halt": 3, "p": [3, 8], "int_": [3, 8], "dx": 3, "inlin": 3, "dot": [2, 3], "sigma": 3, "rho": 3, "xz": 3, "z": 3, "beta": 3, "xy": 3, "configur": 3, "http": [3, 10], "sphinx": 3, "doc": [3, 10], "org": 3, "ext": 3, "modul": [0, 2, 3], "mathjax": 3, "sure": [0, 2, 4, 9], "pembrok": [4, 7], "main": [0, 2, 4], "gate": 4, "refresh": 4, "permiss": 4, "against": 4, "grei": 4, "box": [4, 6], "unsur": 4, "porter": 4, "lodg": 4, "still": 4, "instructor": [4, 5, 6, 7, 9], "psp": 4, "manag": 4, "blink": 4, "off": [4, 7, 9], "unplug": 4, "abl": [4, 8, 9], "littl": [1, 4], "bit": [0, 4], "temperament": 4, "often": [0, 4, 7], "find": [0, 2, 4, 6, 7, 9], "attempt": [1, 2, 4, 8], "just": [0, 1, 4], "silent": 4, "separ": [4, 8], "smaller": 4, "fragment": 4, "verifi": [2, 4], "independ": 4, "IF": 4, "particular": 4, "big": [0, 4], "sound": 4, "robot": [0, 4, 7, 9], "tell": [0, 4, 9], "execut": [1, 4], "report": [0, 5, 7], "deadlin": 5, "thursdai": 5, "juli": 5, "28": 5, "dai": [5, 7], "inventori": [5, 7], "present": [5, 7, 8], "demo": [5, 7, 9], "wednesdai": 5, "27": 5, "15": 5, "18": 5, "00": 5, "dr": 5, "g\u00e1bor": 5, "cs\u00e1nyi": 5, "gc121": 5, "AT": 5, "cam": 5, "ac": 5, "uk": 5, "mr": 5, "tama": 5, "stenczel": 5, "gmail": 5, "com": [5, 10], "pleas": [5, 6, 9], "join": [5, 7], "googl": [5, 9], "group": [5, 7, 9], "feel": [5, 9], "free": [5, 9], "forum": 5, "discuss": [0, 5, 7, 9], "particip": 5, "content": [2, 5], "overview": 5, "python": [0, 1, 2, 5, 7], "ev3": [5, 6, 7, 9, 10], "matlab": [], "toolkit": [], "low": [0, 5, 7, 10], "filter": [5, 7, 10], "pid": [5, 7], "project": [0, 2, 5, 6, 7], "plan": [5, 7], "frequent": 5, "ask": [5, 7], "question": [5, 7], "educ": 6, "core": [6, 7], "expans": 6, "piec": [0, 6], "imper": 6, "reason": 6, "twofold": 6, "easier": 6, "build": [0, 6, 9], "avoid": [6, 9], "lose": 6, "recommend": [6, 10], "pdf": 6, "At": [0, 1, 6, 7, 10], "below": [6, 7, 9], "miss": [6, 7, 9], "compon": [6, 9], "prevent": 6, "progress": 6, "contact": 6, "copi": 6, "write": [1, 6, 9], "count": 6, "mark": [0, 1, 6], "clearli": 6, "welcom": 7, "workshop": 7, "gain": [7, 8], "insight": 7, "engin": [7, 8], "experi": [1, 7, 9], "challeng": [1, 7, 9], "taster": 7, "coordin": 7, "teamwork": 7, "programm": 7, "small": [0, 7, 9], "arm": [0, 7], "processor": 7, "gener": [0, 7, 10], "purpos": [7, 9], "languag": [7, 10], "team": [7, 9], "throughout": [7, 9], "familiar": 7, "learn": [2, 7, 8, 9, 10], "practic": [7, 8], "concept": [7, 8], "techniqu": 7, "continu": [0, 1, 7], "chanc": 7, "come": [7, 9], "suggest": [7, 9], "support": 7, "guidanc": 7, "culmin": 7, "session": 7, "primari": [7, 9], "addition": 7, "member": 7, "contribut": 7, "link": [0, 7], "email": 7, "prefer": 7, "immedi": 7, "notif": 7, "post": 7, "best": 7, "even": [0, 7, 9], "built": [0, 1, 7, 9], "brows": [0, 7], "youtub": [7, 9], "applic": [2, 7], "mindstorm": [0, 2, 7, 9], "version": [7, 9], "nxt": [7, 9], "unoffici": 7, "record": 7, "jump": 7, "straight": [7, 10], "fear": 7, "excel": 7, "fun": [7, 9], "mai": 7, "most": [7, 9], "complex": [7, 9], "highli": 7, "transfer": 7, "skill": 7, "submit": [7, 9], "relev": 7, "conveni": 7, "mileston": 7, "schedul": [7, 9], "uniqu": 7, "although": 7, "offici": 7, "summer": 7, "alloc": 7, "slot": 7, "meet": 7, "lot": 7, "talk": 7, "individu": 7, "24": 7, "hour": 7, "classroom": 7, "spend": 7, "much": [7, 9, 10], "wish": 7, "hand": [0, 7], "weekdai": 7, "between": [1, 7, 8, 10], "9": 7, "10am": 7, "answer": 7, "advic": 7, "engag": [7, 9], "convers": 7, "toward": [7, 9], "workdai": 7, "anyon": 7, "someth": [0, 1, 2, 7, 9], "clash": 7, "morn": 7, "fine": 7, "anyth": 7, "cover": 7, "lesson": 7, "exercis": [7, 8], "extract": 8, "proport": 8, "integr": 8, "deriv": 8, "feedback": 8, "mechan": [8, 9], "wide": 8, "industri": 8, "calcul": 8, "process": [8, 9], "desir": 8, "setpoint": 8, "minim": 8, "adjust": 8, "algorithm": 8, "involv": 8, "three": [8, 9], "constant": 8, "denot": 8, "put": 8, "interpret": [0, 1, 8], "depend": 8, "accumul": 8, "past": 8, "predict": [8, 9], "futur": 8, "base": [8, 9], "sum": [8, 10], "action": 8, "element": 8, "posit": [0, 8], "valv": 8, "damper": 8, "heat": 8, "scheme": 8, "correct": 8, "whose": 8, "constitut": 8, "mv": 8, "defin": 8, "form": 8, "mathrm": 8, "k_p": 8, "k_": 8, "tau": 8, "frac": 8, "dt": 8, "tune": 8, "k_i": 8, "k_d": 8, "sp": 8, "pv": 8, "instantan": 8, "tool": [1, 8], "lectur": 8, "span": 9, "week": 9, "peopl": 9, "size": [1, 9, 10], "proper": 9, "achiev": 9, "goal": 9, "behind": 9, "share": 9, "rest": 9, "drive": 9, "yet": 9, "construct": 9, "difficult": 9, "order": [0, 1, 2, 9], "older": 9, "gravit": 9, "acceler": 9, "climb": 9, "stair": 9, "fast": 9, "scale": 9, "tip": 9, "excit": 9, "concentr": 9, "fight": 9, "obstacl": 9, "encount": 9, "decis": 9, "sign": 9, "imposs": 9, "exactli": 9, "given": [0, 9], "frame": 9, "deal": 9, "uncertainti": 9, "opposit": 9, "earli": [9, 10], "thu": 9, "instead": [0, 9], "drop": [2, 9], "ball": 9, "regist": 9, "manual": 9, "automat": 9, "perform": 9, "great": 9, "easi": 9, "middl": 9, "substanti": 9, "advanc": 9, "estim": 9, "readi": 9, "worri": [9, 10], "revisit": 9, "mental": 9, "model": 9, "spirit": 9, "understand": 9, "track": 9, "alter": 9, "prepar": 9, "grade": 9, "attend": 9, "format": 9, "minimum": [1, 9], "architectur": 9, "made": 9, "evolut": 9, "realli": 9, "thought": 9, "learnt": 9, "did": [0, 2, 9], "inaccur": 9, "third": [0, 9], "transform": 9, "fix": 9, "upload": 9, "consist": 9, "minut": 9, "q": 9, "skip": 10, "onlin": 10, "learnxinyminut": 10, "veri": [0, 10], "short": 10, "simpl": [0, 9, 10], "focu": 10, "beyond": 10, "random": 10, "arrai": 10, "n": 10, "correspond": [2, 10], "throw": [9, 10], "dice": 10, "histogram": 10, "describ": 10, "full": [], "brief": [], "serach": [], "obtain": [], "accept": [], "contain": [], "copyright": [], "2007": [], "pallet": [], "redistribut": [], "sourc": [], "binari": [], "without": [], "modif": [], "permit": [], "met": [], "retain": [], "disclaim": [], "reproduc": [], "materi": [], "distribut": [], "neither": [], "holder": [], "nor": [], "contributor": [], "endors": [], "promot": [], "product": [], "specif": [], "prior": [], "written": 2, "IS": [], "BY": [], "THE": [], "AND": [], "AS": [], "express": [], "OR": [], "impli": [], "warranti": [], "BUT": [], "NOT": [], "limit": [], "TO": [], "OF": [], "merchant": [], "fit": [], "FOR": [], "IN": [], "NO": [], "event": [], "shall": [], "BE": [], "liabl": [], "direct": [], "indirect": [], "incident": [], "special": [], "exemplari": [], "consequenti": [], "damag": [], "procur": [], "substitut": [], "servic": [], "loss": [], "profit": [], "busi": [], "interrupt": [], "howev": 1, "caus": [], "ON": [], "theori": [], "liabil": [], "contract": [], "strict": [], "tort": [], "neglig": [], "aris": [], "advis": [], "SUCH": [], "2010": [], "visual": 2, "lean": [], "respons": [], "theme": [], "compat": [], "began": [], "parti": [], "maintain": [], "live": 9, "seen": [], "websit": [], "paramiko": [], "fabfil": [], "pyinvok": [], "readthedoc": [], "io": [], "develop": [], "pip": [], "git": [], "github": [], "bitprophet": [], "egg": [], "2016": [], "yoshiki": [], "shibukawa": [], "herebi": [], "grant": [], "charg": [], "person": [], "associ": [], "restrict": [], "modifi": [], "merg": [], "publish": [], "sublicens": [], "sell": [], "whom": [], "furnish": [], "subject": [], "portion": [], "kind": [], "noninfring": [], "author": [], "claim": [], "WITH": [], "fullnam": [], "escap": [], "underlin": [], "rubric": [], "item": 2, "endfor": [], "endif": [], "endblock": [], "interfac": [0, 1], "ssh": [0, 1, 2], "launch": [0, 1, 2], "brickrun": [0, 1, 2], "r": [0, 1, 2], "pybrick": [0, 1, 2], "micropython": [0, 1, 2], "hub": [0, 1, 2], "ev3brick": [0, 1, 2], "ev3devic": [0, 1], "And": [0, 1, 2], "200": [0, 1], "prompt": 0, "back": 0, "simultan": 0, "stutter": 0, "friction": 0, "smallest": 0, "reliabl": 0, "slowli": 0, "steadili": 0, "gearbox": 0, "faster": 0, "gear": 0, "larg": [0, 1], "latter": 0, "appli": 0, "entir": 0, "break": [0, 1], "counteract": 0, "voltag": 0, "due": 0, "angular": 0, "momentum": 0, "brake": 0, "activ": [0, 1], "hold": 0, "place": 0, "remain": 0, "being": 0, "lift": 0, "antoh": 0, "space": 0, "fulli": 0, "risk": 0, "releas": [0, 1], "complic": 0, "accur": 0, "pictur": 0, "state": [0, 1], "actual": 0, "intern": 0, "reset_angl": 0, "py": [0, 2], "onto": [0, 2], "kei": 0, "navig": 0, "vscode": [0, 2], "user": 0, "guid": 0, "head": 0, "colorsensor": 1, "touchsensor": 1, "ultrasonicsensor": 1, "s1": 1, "test": 1, "happen": 1, "pick": 1, "rapid": 1, "overwhelm": 1, "true": 1, "millisecond": 1, "again": 1, "ctrl": [1, 2], "Be": 1, "care": 1, "infinit": 1, "hard": 1, "s2": 1, "multifunct": 1, "bright": 1, "surfac": 1, "maximum": 1, "s3": 1, "mm": 1, "shape": 1, "front": 1, "studio": 2, "sticker": 2, "locat": [2, 9], "everyth": 2, "explor": 2, "left": 2, "ev3dev": 2, "browser": 2, "toggl": 2, "arrow": 2, "click": 2, "establish": 2, "within": 2, "shell": 2, "repres": 2, "speaker": 2, "hopefulli": 2, "guess": 2, "hear": 2, "someon": 2, "els": 2, "mistak": 2, "debug": 2, "longer": 2, "cumbersom": 2, "bigger": 2, "hover": 2, "cursor": 2, "down": 2, "icon": 2, "symbol": 2, "90": 2, "necessari": 2, "f5": 2, "remot": 2, "micrpython": 2, "bewar": 9, "spectacular": 9, "kit": 9, "labyrinth": 9, "target": 9, "tac": 9, "toe": 9, "ambiti": 9, "elsewher": 9, "machin": 9}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"ev3": [0, 1, 2], "matlab": [], "toolkit": [], "motor": [0, 1], "introduct": [0, 1, 7, 10], "prerequisit": [0, 1], "exampl": 3, "program": [0, 2, 4, 7], "initialis": [0, 1], "user": [], "input": [], "speed": 0, "control": [0, 8], "tachomet": 0, "sensor": 1, "read": [], "low": 1, "pass": 1, "filter": 1, "configur": [], "main": [], "loop": [], "other": [], "valu": 1, "setup": 2, "get": [], "librari": [], "ad": [], "connect": [2, 4], "brick": [2, 4], "usb": [], "wifi": 4, "end": 6, "an": [], "import": [], "note": [], "reliabl": [], "robust": [], "restructuredtext": 3, "text": 3, "sampl": 3, "math": 3, "frequent": 4, "ask": 4, "question": 4, "my": 4, "card": 4, "doesn": 4, "t": 4, "let": 4, "me": 4, "new": 4, "cellar": 4, "The": 4, "network": 4, "work": 4, "welcom": 5, "pembrok": 5, "lego": [5, 6], "robot": 5, "cours": [5, 6, 7], "2022": 5, "document": 5, "inventori": 6, "sort": 6, "overview": [7, 9], "mail": 7, "list": 7, "prepar": 7, "deliver": 7, "timet": 7, "week": 7, "1": 7, "2": 7, "3": 7, "pid": 8, "project": 9, "plan": 9, "choos": 9, "mileston": 9, "final": 9, "report": 9, "present": 9, "python": 10, "exercis": [1, 10], "what": [], "alabast": [], "mit": [], "licens": [], "mani": 0, "wai": 0, "stop": 0, "write": 0, "further": 0, "inform": 0, "measur": 1, "A": 1, "sensori": 1, "interact": 2, "download": 2}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 56}})