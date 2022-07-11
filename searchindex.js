Search.setIndex({"docnames": ["ev3-motors", "ev3-sensors", "ev3-setup", "example", "faq", "index", "inventory", "overview", "pid", "project", "python-intro", "toolkit-intro", "toolkit-reference"], "filenames": ["ev3-motors.rst", "ev3-sensors.rst", "ev3-setup.rst", "example.rst", "faq.rst", "index.rst", "inventory.rst", "overview.rst", "pid.rst", "project.rst", "python-intro.rst", "toolkit-intro.rst", "toolkit-reference.rst"], "titles": ["EV3 Motors Introduction", "EV3 Sensors Introduction and Low-Pass Filters", "EV3 - Setup", "reStructuredText examples", "Frequently Asked Questions", "Welcome to the Pembroke Lego Robot Course 2022 Documentation!", "LEGO Inventory", "Course Overview", "PID Controller", "Project Planning", "Python Introduction", "Introduction to the EV3 Matlab Toolkit", "Motors and Sensors in the EV3 Matlab Toolkit"], "terms": {"The": [0, 1, 2, 6, 7, 8, 9, 11, 12], "provid": [0, 1, 6, 11, 12], "collect": [0, 1, 7, 11, 12], "function": [0, 1, 11, 12], "here": [0, 1, 2, 3, 5, 7, 11, 12], "we": [0, 1, 2, 3, 6, 7, 9, 10, 11, 12], "go": [0, 1, 2, 4, 10, 11, 12], "through": [0, 1, 2, 7, 8, 11, 12], "an": [0, 1, 4, 6, 7, 8, 9, 11, 12], "thi": [0, 1, 2, 3, 6, 7, 9, 10, 11, 12], "part": [0, 1, 4, 7, 9, 10, 11], "tutori": [0, 1, 7, 11], "assum": [0, 1, 11], "you": [0, 1, 2, 4, 6, 7, 8, 9, 10, 11, 12], "connect": [0, 1, 7, 10, 11], "via": [0, 1, 8, 11], "usb": [1, 2, 11], "complet": [0, 1, 9, 11], "setup": [0, 1, 5, 11], "section": [0, 1, 3, 7, 10, 11], "befor": [0, 1, 4, 7, 10, 11], "proceed": [0, 1, 11], "also": [0, 1, 2, 3, 7, 9, 11], "attach": [0, 1, 11], "one": [0, 1, 2, 7, 9, 10, 11], "port": [0, 1, 2, 11], "A": [0, 1, 2, 8, 9, 11], "brick": [0, 1, 7, 10, 11], "don": [1, 7, 9, 10, 11], "t": [1, 2, 5, 7, 8, 9, 10, 11], "forget": [1, 7, 11], "when": [0, 1, 7, 9, 11, 12], "want": [0, 1, 2, 11], "start": [1, 2, 7, 10, 11], "new": [1, 2, 11], "have": [0, 1, 2, 3, 6, 7, 9, 10, 11], "end": [0, 1, 3, 5, 7, 9, 11], "previou": [1, 7, 11], "first": [1, 2, 4, 7, 9, 10, 11], "delet": [1, 11], "b": [0, 1, 3, 11], "open": [1, 2, 7, 11], "m": [0, 1, 11], "file": [1, 2, 9, 11], "from": [0, 1, 2, 6, 7, 8, 9, 11], "your": [0, 1, 2, 4, 6, 7, 9, 11], "directori": 11, "can": [0, 1, 2, 4, 7, 8, 9, 10, 11, 12], "download": [1, 2, 11], "demonstr": [1, 11], "some": [0, 2, 3, 7, 9, 11], "give": [2, 7, 9, 11], "basic": 11, "interact": [0, 4, 11], "over": [7, 11], "plai": [0, 7, 11], "around": [0, 7, 11], "us": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12], "instruct": 11, "print": [6, 11], "after": [1, 7, 8, 11], "check": [1, 4, 9, 11, 12], "task": [1, 10, 11, 12], "what": [1, 2, 9, 11, 12], "doe": [1, 11], "measur": [1, 8, 9, 11], "let": [1, 3, 11], "s": [1, 2, 3, 6, 11], "inspect": [1, 11], "now": [0, 1, 2, 4, 11], "init": [1, 11], "disp": 11, "iotyp": [1, 11], "beep": [2, 4, 11], "indic": 11, "As": [1, 9, 11], "know": [1, 7, 11], "alreadi": [1, 7, 11], "output": [2, 8, 11, 12], "string": 11, "consol": 11, "initi": 11, "note": [6, 9, 11], "run": [0, 2, 3, 7, 11], "wireless": [1, 2, 4, 11], "could": 11, "follow": [1, 2, 4, 6, 8, 9, 11], "chang": [1, 8, 11], "block": [3, 11], "code": [1, 2, 3, 9, 11], "creat": [0, 1, 2, 7, 11], "final": [1, 7, 8, 11], "success": 11, "signal": [1, 9, 11], "import": [0, 2, 8, 9], "ar": [0, 1, 4, 6, 7, 8, 9, 10, 12], "try": [0, 1, 4], "must": [], "done": [], "command": [0, 2, 4, 11], "outputstart": [], "0": [1, 2, 8, 11], "devic": [1, 2, 11], "motora": 11, "do": [0, 3, 4, 7, 9, 12], "otherwis": [0, 1], "noth": [], "userin": 11, "while": [0, 1, 11], "strcmp": 11, "f": [3, 11], "get": [0, 1, 4, 7, 9, 11], "u": [8, 11], "d": [2, 8, 11], "o": [2, 11], "c": [0, 3, 11], "v": 11, "monitor": [1, 11], "loop": [8, 11], "condit": 11, "enter": [2, 11], "store": 11, "variabl": [8, 11], "equal": 11, "letter": [0, 11], "so": [0, 2, 4, 6, 7, 9, 11], "next": [2, 4, 7, 10, 11], "time": [1, 2, 5, 7, 8, 9, 11], "won": 11, "finish": [9, 11], "close": [1, 11], "increas": 11, "motorpow": 11, "10": [1, 11], "100": [1, 11], "outputpow": 11, "power": [0, 8, 11], "num2str": 11, "valu": [8, 11], "commun": 11, "call": [1, 2, 8, 11], "specifi": [0, 9, 11], "suppli": [8, 11], "percentag": 11, "rang": 11, "which": [0, 1, 6, 9, 11], "why": 11, "cap": 11, "how": [0, 1, 6, 7, 9, 10, 11, 12], "number": [1, 3, 6, 11], "convert": 11, "combin": [1, 11], "vector": [1, 11], "string1": 11, "string2": 11, "notat": 11, "pass": [5, 7, 9, 10, 11], "For": [1, 6, 9, 11, 12], "those": [7, 11], "interest": [7, 9, 11], "argument": 11, "chain": [1, 11], "level": 11, "onli": [7, 11], "matter": 11, "sever": [0, 9, 11], "togeth": 11, "cabl": 11, "In": [0, 1, 2, 6, 7, 9, 11], "case": 11, "send": [1, 11], "other": [0, 4, 5, 7, 9, 11], "appropri": 11, "sinc": [1, 9, 11], "alwai": [0, 1, 11], "work": [2, 7, 9, 11], "singl": [2, 9, 11], "should": [2, 4, 6, 7, 9, 11], "implement": [1, 10, 11], "method": 11, "where": [0, 1, 4, 7, 8, 9, 11], "amount": 11, "hint": 11, "might": [1, 4, 9, 11], "search": [4, 7, 9, 11], "internet": 11, "turn": [0, 2, 4, 11], "integ": [10, 11], "tacho": 11, "outputgetcount": 11, "displai": [1, 11], "angl": [0, 1, 11], "rel": 11, "last": [1, 7, 9, 11], "wa": [0, 9, 11], "clear": 11, "degre": [0, 1, 2], "comput": [1, 2, 7, 9, 11], "averag": [1, 11], "all": [0, 1, 4, 11], "trigger": 11, "result": 11, "each": [1, 6, 7, 9, 10, 11, 12], "add": [9, 11], "doesn": 11, "ani": [1, 6, 11], "intro": [], "out": [1, 4, 9, 12], "page": [7, 10, 11, 12], "control": [1, 5, 7, 12], "motor": [1, 2, 5, 7, 11], "analys": 1, "manipul": [1, 8, 12], "data": [1, 2], "touch": [1, 4, 11, 12], "1": [1, 2, 10, 11], "plotsensor": [1, 12], "them": [0, 1, 4, 6, 7, 9, 12], "graph": 1, "default": [1, 2], "show": [1, 6, 7, 9, 11], "whether": [1, 4, 9], "press": [1, 2], "It": [1, 2, 7, 10], "laptop": 1, "line": [1, 3, 9], "accordingli": [1, 8], "re": [1, 2, 4, 6, 9], "Is": 1, "latenc": 1, "appear": [1, 2], "button": 1, "few": [1, 7], "allow": [1, 7], "choos": [1, 2, 7, 11], "type": [1, 2, 6, 11, 12], "potenti": 1, "wifi": [1, 2], "layer": 1, "cours": [1, 2, 4, 9, 10], "port1": 1, "mode": [0, 1, 11, 12], "push": 1, "html": [1, 3], "4": [1, 11], "avail": [0, 1, 12], "return": [1, 9], "bump": [1, 11], "reset": 1, "color": 1, "colreflect": 1, "reflect": [1, 12], "light": [1, 4, 12], "intens": 1, "colambi": 1, "ambient": [1, 12], "colcolor": 1, "detect": 1, "black": 1, "2": [1, 2, 3, 9], "blue": [1, 4], "3": [1, 2], "green": [1, 2], "yellow": 1, "5": [1, 9], "red": 1, "6": [1, 2, 10], "white": 1, "7": 1, "brown": 1, "ultrason": [1, 12], "usdistcm": 1, "distanc": 1, "centimet": 1, "max": 1, "255": 1, "cm": 1, "usdistin": 1, "inch": 1, "uslisten": 1, "gyro": [1, 12], "gyroang": 1, "rotat": [1, 2], "gyror": 1, "rate": [1, 8], "per": [0, 1], "second": [0, 1, 9], "tic": 1, "figur": 1, "hfig": 1, "name": [1, 2, 6, 8], "x": [1, 3], "hplot": 1, "plot": [1, 12], "set": [1, 2, 6, 7, 9, 11], "inputreadsi": 1, "titl": 1, "inputdevicegetnam": 1, "y": [1, 3], "label": 1, "inputdevicesymbol": 1, "ylabel": 1, "xlabel": 1, "axi": 1, "xlim": 1, "timer": 1, "current": [1, 2, 8], "toc": 1, "its": [0, 1, 2, 8], "ax": 1, "wait": 1, "until": 1, "findobj": 1, "exit": [1, 2, 4], "object": [0, 1, 2], "anymor": 1, "ha": [1, 2, 4, 6, 9, 12], "been": 1, "xdata": 1, "ydata": 1, "drawnow": 1, "updat": 1, "latest": [1, 3, 7], "redrawn": 1, "everi": [1, 7], "restart": [1, 2], "make": [0, 1, 4, 6, 9], "paramet": [1, 8], "top": [1, 2], "easili": 1, "colour": 1, "too": [1, 7, 9, 10], "would": [1, 7], "far": 1, "seem": 1, "well": [1, 7], "precis": 1, "notic": [0, 1], "see": [0, 1, 7, 9, 11, 12], "sometim": [1, 2, 4, 7, 8], "noisi": [1, 9], "sharpli": 1, "One": 1, "wai": [1, 2, 7, 9], "mitig": 1, "sharp": 1, "becaus": [0, 1, 6, 7, 9], "high": 1, "frequenc": 1, "discret": 1, "exponenti": 1, "weight": [0, 1, 8, 9], "move": 1, "imagin": [1, 9], "origin": [1, 9], "x_0": 1, "x_1": 1, "x_2": 1, "ldot": 1, "smooth": 1, "factor": 1, "alpha": 1, "determin": [1, 10], "aggress": 1, "ll": [1, 9], "Then": [0, 1, 2, 7], "y_0": 1, "y_1": 1, "y_2": 1, "begin": [1, 3, 7], "align": [1, 3], "y_": 1, "k": [1, 5], "x_": 1, "y_k": 1, "word": [1, 9], "take": [1, 4, 8], "mean": 1, "adapt": 1, "customis": 1, "observ": [1, 2, 9, 12], "effect": 1, "more": [0, 1, 7, 8, 9], "detail": [1, 7], "wikipedia": [1, 8], "articl": [1, 8], "program": [2, 9, 10], "custom": [], "extens": 9, "queensland": [], "univers": [], "technolog": [], "Their": [], "inform": 2, "found": [], "qut": [11, 12], "refer": [7, 11, 12], "quick": [], "introduct": [5, 12], "local": [], "cach": [], "zip": [], "2014": [], "07": [], "16": [], "unzip": [], "folder": [2, 9], "exampl": 9, "home": [], "path": [], "pkp": [], "lego": [2, 7, 10], "document": 9, "includ": [2, 9], "thei": 7, "becom": [], "normal": [], "under": [0, 2], "ribbon": [], "environ": [2, 7], "tab": 2, "On": [], "instal": [], "requir": [2, 9], "administr": [], "privileg": [], "error": [0, 4, 8], "admin": [], "right": [2, 9, 11], "simpli": 8, "keep": [0, 6], "own": 7, "same": 2, "easiest": [], "confirm": [2, 4], "If": [0, 2, 4, 6, 7, 10], "messag": [], "anoth": 0, "exist": [], "both": [2, 6, 9], "network": 2, "isn": 2, "capabl": 2, "netgear": 2, "dongl": [2, 4], "plug": [2, 4], "menu": 2, "option": 2, "select": 2, "encrypt": 2, "password": 2, "up": [2, 7, 9], "dedic": [2, 7], "There": [0, 2, 6, 7, 10], "none": 2, "capit": [], "ip": 2, "address": 2, "linux": [2, 7], "mac": 2, "termin": 2, "window": 2, "cmd": [], "ping": 2, "look": [2, 7], "like": [2, 7], "192": 2, "168": 2, "82": 2, "56": 2, "byte": 2, "64": 2, "icmp_seq": 2, "ttl": 2, "61": 2, "894": 2, "ms": 2, "645": 2, "664": 2, "266": 2, "regularli": [2, 9], "broadcast": 2, "about": [2, 4, 7, 8, 9, 10], "nc": 2, "ulk": 2, "3015": 2, "To": 0, "need": [0, 7, 10], "access": [2, 7], "java": [], "class": [7, 9, 10], "outputstreamsend": [], "classpath": [], "javaaddpath": [], "wfaddr": [], "wfport": [], "5555": [], "wfsn": [], "serial": [], "i": [0, 4, 8], "my": [], "104": [], "001653444434": [], "particularli": [], "didn": 9, "perfect": [], "common": [], "issu": [0, 2], "crash": 10, "behav": [], "differ": [0, 8, 12], "These": 9, "two": [4, 7, 9, 10], "problem": 7, "solv": [], "softwar": [], "directli": [], "ensur": [], "onc": [0, 2, 4], "e": [0, 8], "g": [0, 9], "cannot": 0, "good": [2, 9], "idea": [5, 7, 9], "clearvar": [], "help": [4, 7, 9], "thing": 0, "addit": [], "hardwar": [], "sensor": [0, 2, 5, 7, 9, 10], "nois": [], "read": [0, 12], "stop": 7, "moment": [], "therefor": [], "incred": [], "design": [7, 8, 9], "system": 8, "possibl": 9, "step": [4, 6], "mention": [], "abov": [2, 12], "tachomet": [], "rather": 9, "than": 7, "delai": [], "mani": [6, 9, 10], "emphasi": 3, "strong": 3, "liter": 3, "subscript": 3, "superscript": 3, "nest": 3, "bullet": 3, "list": [3, 12], "definit": [3, 9], "term": [3, 8], "real": 3, "quot": 3, "miert": 3, "kolostorban": 3, "keressuk": 3, "kurvat": 3, "halt": 3, "p": [3, 8], "int_": [3, 8], "dx": 3, "inlin": 3, "dot": [2, 3], "sigma": 3, "rho": 3, "xz": 3, "z": 3, "beta": 3, "xy": 3, "configur": 3, "http": [3, 10], "sphinx": 3, "doc": [3, 10], "org": 3, "ext": 3, "modul": [2, 3], "mathjax": 3, "sure": [0, 4, 9], "pembrok": [4, 7], "main": [2, 4], "gate": 4, "refresh": 4, "permiss": 4, "against": 4, "grei": 4, "box": [4, 6], "unsur": 4, "porter": 4, "lodg": 4, "still": 4, "instructor": [4, 5, 6, 7, 9], "psp": 4, "manag": 4, "blink": 4, "off": [4, 7, 9], "unplug": 4, "abl": [4, 8, 9], "littl": 4, "bit": [0, 4], "temperament": 4, "often": [4, 7], "find": [0, 2, 4, 6, 7, 9], "attempt": [4, 8], "just": [0, 4], "silent": 4, "separ": [4, 8], "smaller": 4, "fragment": 4, "verifi": [2, 4], "independ": 4, "IF": 4, "particular": 4, "big": [0, 4], "sound": 4, "robot": [4, 7, 9], "tell": [4, 9], "execut": 4, "report": [5, 7], "deadlin": 5, "thursdai": 5, "juli": 5, "28": 5, "dai": [5, 7], "inventori": [5, 7], "present": [5, 7, 8], "demo": [5, 7, 9], "wednesdai": 5, "27": 5, "15": 5, "18": 5, "00": 5, "dr": 5, "g\u00e1bor": 5, "cs\u00e1nyi": 5, "gc121": 5, "AT": 5, "cam": 5, "ac": 5, "uk": 5, "mr": 5, "tama": 5, "stenczel": 5, "gmail": 5, "com": [5, 10], "pleas": [5, 6], "join": [5, 7], "googl": [5, 9], "group": [5, 7, 9], "feel": [5, 9], "free": [5, 9], "forum": 5, "discuss": [5, 7, 9], "particip": 5, "content": [2, 5], "overview": [5, 12], "python": [0, 2, 5, 7], "ev3": [5, 6, 7, 9, 10], "matlab": [1, 9], "toolkit": 1, "low": [0, 5, 7, 10], "filter": [5, 7, 10], "pid": [5, 7], "project": [2, 5, 6, 7], "plan": [5, 7], "frequent": 5, "ask": [5, 7], "question": [5, 7], "educ": 6, "core": [6, 7], "expans": 6, "piec": [0, 6], "imper": 6, "reason": 6, "twofold": 6, "easier": 6, "build": [0, 6, 9], "avoid": 6, "lose": 6, "recommend": [6, 10], "pdf": 6, "At": [0, 6, 7, 10], "below": [6, 7, 9], "miss": [6, 7], "compon": [6, 9], "prevent": 6, "progress": 6, "contact": 6, "copi": 6, "write": [6, 9], "count": [6, 11], "mark": [0, 6], "clearli": 6, "welcom": 7, "workshop": 7, "gain": [7, 8], "insight": 7, "engin": [7, 8], "experi": [7, 9], "challeng": [7, 9], "taster": 7, "coordin": 7, "teamwork": 7, "programm": 7, "small": [0, 7], "arm": [0, 7], "processor": 7, "gener": [0, 7, 10], "purpos": [7, 9], "languag": [7, 10], "team": [7, 9], "throughout": [7, 9], "familiar": 7, "learn": [2, 7, 8, 9, 10], "practic": [7, 8], "concept": [7, 8], "techniqu": 7, "continu": [0, 7], "chanc": 7, "come": [7, 9], "suggest": [7, 9], "support": 7, "guidanc": 7, "culmin": 7, "session": 7, "primari": [7, 9], "addition": 7, "member": 7, "contribut": 7, "link": 7, "email": 7, "prefer": 7, "immedi": 7, "notif": 7, "post": 7, "best": 7, "even": [0, 7, 9], "built": [0, 7, 9], "brows": 7, "youtub": [7, 9], "applic": 7, "mindstorm": [2, 7, 9], "version": [7, 9], "nxt": [7, 9], "unoffici": 7, "record": 7, "jump": 7, "straight": [7, 10], "fear": 7, "excel": 7, "fun": 7, "mai": 7, "most": [7, 9], "complex": [7, 9], "highli": 7, "transfer": 7, "skill": 7, "submit": [7, 9], "relev": 7, "conveni": 7, "mileston": 7, "schedul": [7, 9], "uniqu": 7, "although": 7, "offici": 7, "summer": 7, "alloc": 7, "slot": 7, "meet": 7, "lot": 7, "talk": 7, "individu": 7, "24": 7, "hour": 7, "classroom": 7, "spend": 7, "much": [7, 9, 10], "wish": 7, "hand": [0, 7], "weekdai": 7, "between": [7, 8, 10], "9": 7, "10am": 7, "answer": [7, 11], "advic": 7, "engag": [7, 9], "convers": 7, "toward": [7, 9], "workdai": 7, "anyon": 7, "someth": [0, 2, 7, 9], "clash": 7, "morn": 7, "fine": 7, "anyth": 7, "cover": 7, "lesson": 7, "exercis": [7, 8], "extract": 8, "proport": 8, "integr": 8, "deriv": 8, "feedback": 8, "mechan": 8, "wide": 8, "industri": 8, "calcul": 8, "process": [8, 9], "desir": 8, "setpoint": 8, "minim": 8, "adjust": 8, "algorithm": 8, "involv": 8, "three": [8, 9], "constant": 8, "denot": 8, "put": 8, "interpret": [0, 8], "depend": 8, "accumul": 8, "past": 8, "predict": [8, 9], "futur": 8, "base": [8, 9], "sum": [8, 10], "action": 8, "element": 8, "posit": [0, 8], "valv": 8, "damper": 8, "heat": 8, "scheme": 8, "correct": 8, "whose": 8, "constitut": 8, "mv": 8, "defin": 8, "form": 8, "mathrm": 8, "k_p": 8, "k_": 8, "tau": 8, "frac": 8, "dt": 8, "tune": 8, "k_i": 8, "k_d": 8, "sp": 8, "pv": 8, "instantan": 8, "tool": 8, "lectur": 8, "span": 9, "week": 9, "peopl": 9, "size": [9, 10], "proper": 9, "achiev": 9, "goal": 9, "behind": 9, "share": 9, "rest": 9, "drive": 9, "yet": [9, 11], "construct": 9, "difficult": 9, "order": [0, 2, 9], "older": 9, "gravit": 9, "acceler": 9, "climb": 9, "stair": 9, "fast": 9, "scale": 9, "tip": 9, "excit": 9, "concentr": 9, "fight": 9, "obstacl": 9, "encount": 9, "decis": 9, "sign": 9, "imposs": 9, "exactli": 9, "given": 9, "frame": 9, "deal": 9, "uncertainti": 9, "opposit": 9, "earli": [9, 10], "thu": 9, "instead": 9, "drop": [2, 9], "ball": 9, "regist": 9, "manual": 9, "automat": 9, "perform": 9, "great": 9, "easi": 9, "middl": 9, "substanti": 9, "advanc": 9, "estim": 9, "readi": 9, "worri": [9, 10], "revisit": 9, "mental": 9, "model": 9, "spirit": 9, "understand": 9, "track": 9, "alter": 9, "prepar": 9, "grade": 9, "attend": 9, "format": 9, "minimum": 9, "architectur": 9, "made": 9, "evolut": 9, "realli": 9, "thought": 9, "learnt": 9, "did": [2, 9], "inaccur": 9, "third": [0, 9], "transform": 9, "fix": 9, "upload": 9, "consist": 9, "minut": 9, "q": 9, "skip": 10, "onlin": 10, "learnxinyminut": 10, "veri": [0, 10], "short": 10, "simpl": 10, "focu": 10, "beyond": 10, "random": 10, "arrai": 10, "n": 10, "correspond": 10, "throw": 10, "dice": 10, "histogram": 10, "describ": [10, 12], "full": [11, 12], "brief": [11, 12], "serach": 11, "obtain": 11, "accept": 11, "contain": 12, "copyright": [], "2007": [], "pallet": [], "redistribut": [], "sourc": [], "binari": [], "without": [], "modif": [], "permit": [], "met": [], "retain": [], "disclaim": [], "reproduc": [], "materi": [], "distribut": [], "neither": [], "holder": [], "nor": [], "contributor": [], "endors": [], "promot": [], "product": [], "specif": [], "prior": [], "written": 2, "IS": [], "BY": [], "THE": [], "AND": [], "AS": [], "express": [], "OR": [], "impli": [], "warranti": [], "BUT": [], "NOT": [], "limit": [], "TO": [], "OF": [], "merchant": [], "fit": [], "FOR": [], "IN": [], "NO": [], "event": [], "shall": [], "BE": [], "liabl": [], "direct": [], "indirect": [], "incident": [], "special": [], "exemplari": [], "consequenti": [], "damag": [], "procur": [], "substitut": [], "servic": [], "loss": [], "profit": [], "busi": [], "interrupt": [], "howev": [], "caus": [], "ON": [], "theori": [], "liabil": [], "contract": [], "strict": [], "tort": [], "neglig": [], "aris": [], "advis": [], "SUCH": [], "2010": [], "visual": 2, "lean": [], "respons": [], "theme": [], "compat": [], "began": [], "parti": [], "maintain": [], "live": [], "seen": [], "websit": [], "paramiko": [], "fabfil": [], "pyinvok": [], "readthedoc": [], "io": [], "develop": [], "pip": [], "git": [], "github": [], "bitprophet": [], "egg": [], "2016": [], "yoshiki": [], "shibukawa": [], "herebi": [], "grant": [], "charg": [], "person": [], "associ": [], "restrict": [], "modifi": [], "merg": [], "publish": [], "sublicens": [], "sell": [], "whom": [], "furnish": [], "subject": [], "portion": [], "kind": 2, "noninfring": [], "author": [], "claim": [], "WITH": [], "fullnam": [], "escap": [], "underlin": [], "rubric": [], "item": 2, "endfor": [], "endif": [], "endblock": [], "interfac": 0, "ssh": [0, 2], "launch": 0, "brickrun": [0, 2], "r": [0, 2], "pybrick": [0, 2], "micropython": [0, 2], "hub": [0, 2], "ev3brick": [0, 2], "ev3devic": 0, "And": [0, 2], "200": 0, "prompt": 0, "back": 0, "simultan": 0, "stutter": 0, "friction": 0, "smallest": 0, "reliabl": 0, "slowli": 0, "steadili": 0, "gearbox": 0, "faster": 0, "gear": 0, "larg": 0, "latter": 0, "appli": 0, "entir": 0, "break": 0, "counteract": 0, "voltag": 0, "due": 0, "angular": 0, "momentum": 0, "brake": 0, "activ": 0, "hold": 0, "place": 0, "remain": 0, "being": 0, "lift": 0, "antoh": 0, "space": 0, "fulli": 0, "risk": 0, "releas": 0, "studio": 2, "sticker": 2, "vscode": 2, "explor": 2, "left": 2, "ev3dev": 2, "browser": 2, "toggl": 2, "arrow": 2, "click": 2, "establish": 2, "within": 2, "shell": 2, "repres": 2, "speaker": 2, "hopefulli": 2, "guess": 2, "hear": 2, "ctrl": 2, "debug": 2, "longer": 2, "cumbersom": 2, "bigger": 2, "onto": 2, "hover": 2, "cursor": 2, "down": 2, "icon": 2, "symbol": 2, "90": 2, "py": 2, "necessari": 2}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"ev3": [0, 1, 2, 11, 12], "matlab": [11, 12], "toolkit": [11, 12], "motor": [0, 12], "introduct": [0, 1, 7, 10, 11], "prerequisit": [0, 1, 11], "exampl": [1, 3, 11], "program": [1, 4, 7, 11], "initialis": [0, 1, 11], "user": 11, "input": 11, "speed": [0, 11], "control": [0, 8, 11], "tachomet": [0, 11], "sensor": [1, 11, 12], "read": [1, 11], "low": 1, "pass": 1, "filter": 1, "configur": 1, "main": 1, "loop": 1, "other": 1, "valu": 1, "setup": 2, "get": [], "librari": [], "ad": [], "connect": [2, 4], "brick": [2, 4], "usb": [], "wifi": 4, "end": 6, "an": [], "import": [], "note": [], "reliabl": [], "robust": [], "restructuredtext": 3, "text": 3, "sampl": 3, "math": 3, "frequent": 4, "ask": 4, "question": 4, "my": 4, "card": 4, "doesn": 4, "t": 4, "let": 4, "me": 4, "new": 4, "cellar": 4, "The": 4, "network": 4, "work": 4, "welcom": 5, "pembrok": 5, "lego": [5, 6], "robot": 5, "cours": [5, 6, 7], "2022": 5, "document": 5, "inventori": 6, "sort": 6, "overview": [7, 9], "mail": 7, "list": 7, "prepar": 7, "deliver": 7, "timet": 7, "week": 7, "1": 7, "2": 7, "3": 7, "pid": 8, "project": 9, "plan": 9, "choos": 9, "mileston": 9, "final": 9, "report": 9, "present": 9, "python": 10, "exercis": 10, "what": [], "alabast": [], "mit": [], "licens": [], "mani": 0, "wai": 0, "stop": 0, "interact": 2}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 56}})