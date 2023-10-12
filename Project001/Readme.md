# code2 

Django templates allow you to create dynamic HTML pages populated with data from your Django application.

Data placement: Use {{ variable_name }} to place data from variables into HTML.

Variables: Variables are created by passing them to the render() function when rendering the template.

Tags: Tags are used to control the flow of the template and perform other tasks, such as for loops and if statements.

Filters: Filters are used to modify the output of variables, such as converting a string to uppercase.

Here is an example of how to use these concepts together:
```
{% for anime in anime_list %}
  <h2>Title: {{ anime.title | upper }}</h2>
{% endfor %}
```
Using This i Created Following webpage
### view.py

```python
from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render

def print_hello(request):
    anime_list ={'animes' :[{
        'title': 'Attack on Titans',
        'Summary' : 'Summaries. In a world where giant humanoid Titans prey on humans, Eren joins the scouting legion to get revenge on the monsters who killed everyone in his town. A teenage boy named Eren Jaeger must use his special gift to fight alongside with the military to defeat the titan race.',
        'status' : 'Running',
        'age' : False
    },
    {
        'title' : 'Naruto',
        'status' : 'completed',
        'age' : True
    },
    {
        'title' : 'one piece',
        'Summary' : 'ONE PIECE is a legendary high-seas quest unlike any other. Luffy is a young adventurer who has longed for a life of freedom ever since he can remember. He sets off from his small village on a perilous journey to find the legendary fabled treasure, ONE PIECE, to become King of the Pirates!',
        'status' : 'Running',
        'age' : True
    }]}

    return render(request,"hello.html",anime_list)
```

### hello.html

```html
{% for anime in animes %}
    <h2>Title : {{anime.title | upper }}</title></h2>
    <p>Summary : {{anime.Summary | default:'Summary Not Available'}} </p>
    <h3>Status : {{anime.status}} </h3>
    {% if anime.age %}
        <p><b>13+ anime</b></p>
    {% else %}
        <p><b>R Rated</b></p>
    {% endif %}
    <hr>
{% endfor %}
```

### Output
![wb2](https://github.com/nithinganesh1/django/assets/122164879/eb0b8cd6-4da2-4b9d-a74c-1c325a352f43)
