# Our solution
arr=$(cat words.txt | tr " " "\n")
wordCount=()

for word in $arr
do
  if [[ -v "wordCount[$word]" ]]
  then
    currentCount=wordCount[$word]
    wordCount[$word]=$(($currentCount+1))
  else
    wordCount[$word]=1
  fi
done

for k in "${!wordCount[@]}"
do
  echo $k ${wordCount["$k"]}
done |
sort -rn -k2

# Community solution
tr "\n" " " < words.txt |  tr -s " " "\n" | sort | uniq -c | sort -r | awk '{print $2,$1}'
