#include <climits>
#include <cmath>

class Solution
{
public:
    int reverse(int x)
    {
        if (INT_MIN == x)
        {
            return 0;
        }
        int result = 0;
        int multiplier = x < 0 ? -1 : 1;

        x = abs(x);

        while (x != 0)
        {
            if (result > 0 && (INT_MAX / result) < 10)
            {
                return 0;
            }
            int rem = x % 10;
            result = (result * 10) + rem;
            x = x / 10;
        }

        return result * multiplier;
    }
};
