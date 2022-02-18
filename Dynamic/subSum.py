def maxSubsetSum(arr)
    dp = list()
    dp.append(arr[0])
    dp.append(max(arr[2]))
    ans = dp[-1]
    for i in arr[2]
        dp.append(max(i, dp[-2] + i, ans))
        ans = max(ans, dp[-1])
    return ans